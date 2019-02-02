(function($) {
  'use strict';
  $(function() {

    if ($(".hi").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let user = JSON.parse(this.response);

          $(".hi").text(`Hi, ${user.firstname} ${user.lastname}`);
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/user", true);
      request.send();
    }

    if ($("#total-sales").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let totalSales = JSON.parse(this.response);

          $("#total-sales").text(`${totalSales.amount} ${totalSales.currency}`);
          $("#total-sales-month").text(totalSales.period);
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/totalsales", true);
      request.send();
    }

    if ($("#total-purchases").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let totalPurchases = JSON.parse(this.response);
        
          $("#total-purchases").text(`${totalPurchases.amount} ${totalPurchases.currency}`);
          $("#total-purchases-month").text(totalPurchases.period);
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/totalpurchases", true);
      request.send();
    }

    if ($("#total-orders").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let totalOrders = JSON.parse(this.response);

          $("#total-orders").text(`${totalOrders.amount} ${totalOrders.currency}`);
          $("#total-orders-month").text(totalOrders.period);
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/totalorders", true);
      request.send();
    }

    if ($("#total-growth").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let totalGrowth = JSON.parse(this.response);

          $("#total-growth").text(`${totalGrowth.amount} ${totalGrowth.currency}`);
          $("#total-growth-month").text(totalGrowth.period);
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/totalgrowth", true);
      request.send();
    }

    $(".logout").on("click", function () {
      window.location.replace("index.html");
    })

    if ($("#total-sales-chart").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let totalSales = JSON.parse(this.response);

          $(".revenue").text(totalSales.revenue);
          $(".returns").text(totalSales.returns);
          $(".queries").text(totalSales.queries);
          $(".invoices").text(totalSales.invoices);

          var areaData = {
            labels: totalSales.labels,
            datasets: [
              {
                data: totalSales.datasets[0].data,
                backgroundColor: [
                  'rgba(61, 165, 244, .0)'
                ],
                borderColor: [
                  'rgb(61, 165, 244)'
                ],
                borderWidth: 2,
                fill: 'origin',
                label: totalSales.datasets[0].label
              },
              {
                data: totalSales.datasets[1].data,
                backgroundColor: [
                  'rgba(241, 83, 110, .0)'
                ],
                borderColor: [
                  'rgb(241, 83, 110)'
                ],
                borderWidth: 2,
                fill: 'origin',
                label: totalSales.datasets[1].label
              }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [{
                display: true,
                ticks: {
                  display: true,
                  padding: 20,
                  fontColor: "#000",
                  fontSize: 14
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
                display: true,
                ticks: {
                  display: true,
                  autoSkip: false,
                  maxRotation: 0,
                  stepSize: 100,
                  fontColor: "#000",
                  fontSize: 14,
                  padding: 18,
                  stepSize: 100000,
                  callback: function (value) {
                    var ranges = [
                      { divider: 1e6, suffix: 'M' },
                      { divider: 1e3, suffix: 'k' }
                    ];
                    function formatNumber(n) {
                      for (var i = 0; i < ranges.length; i++) {
                        if (n >= ranges[i].divider) {
                          return (n / ranges[i].divider).toString() + ranges[i].suffix;
                        }
                      }
                      return n;
                    }
                    return formatNumber(value);
                  }
                },
                gridLines: {
                  drawBorder: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .37
              },
              point: {
                radius: 0
              }
            }
          }
          var revenueChartCanvas = $("#total-sales-chart").get(0).getContext("2d");
          var revenueChart = new Chart(revenueChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
    });
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/totalsaleschart", true);
      request.send();
    }

    if ($("#sales-downloads").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let salesReportOverview = JSON.parse(this.response);

          $("#sales-downloads").text(salesReportOverview.downloads);
          $("#sales-purchases").text(salesReportOverview.försäljning);
          $("#sales-users").text(salesReportOverview.users);
          $("#sales-growth").text(salesReportOverview.growth);
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/salesreportoverview", true);
      request.send();
    }
  

    if ($("#users-chart").length) {
      let request = new XMLHttpRequest();
        request.onload = function () {
          if (this.readyState == 4 && this.status == 200) {
            let users = JSON.parse(this.response);

            $(".users-growth").text(users.growth);
            $(".users-users").text(users.users);


          var areaData = {
            labels: users.labels,
            datasets: [{
                data: users.datasets[0].data,
                backgroundColor: [
                  '#e0fff4'
                ],
                borderWidth: 2,
                borderColor: "#00c689",
                fill: 'origin',
                label: users.datasets[0].label
              }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [{
                display: false,
                ticks: {
                  display: true
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: true,
                  autoSkip: false,
                  maxRotation: 0,
                  stepSize: 100,
                  min: 0,
                  max: 300
                },
                gridLines: {
                  drawBorder: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .35
              },
              point: {
                radius: 0
              }
            }
          }
          var salesChartCanvas = $("#users-chart").get(0).getContext("2d");
          var salesChart = new Chart(salesChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
    });
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/userschart", true);
      request.send();
    }

    if ($("#projects-chart").length) {
      let request = new XMLHttpRequest();
        request.onload = function () {
          if (this.readyState == 4 && this.status == 200) {
            let projects = JSON.parse(this.response);
        
            $(".projects-percent").text(projects.procent);
            $(".projects-growth").text(projects.growth);


          var areaData = {
            labels: projects.months,
            datasets: [{
                data: projects.datasets[0].data,
                backgroundColor: [
                  '#e5f2ff'
                ],
                borderWidth: 2,
                borderColor: "#3da5f4",
                fill: 'origin',
                label: projects.datasets[0].label
              }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [{
                display: false,
                ticks: {
                  display: true
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
                display: false,
                ticks: {
                  display: true,
                  autoSkip: false,
                  maxRotation: 0,
                  stepSize: 100,
                  min: 0,
                  max: 300
                },
                gridLines: {
                  drawBorder: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .05
              },
              point: {
                radius: 0
              }
            }
          }
          var salesChartCanvas = $("#projects-chart").get(0).getContext("2d");
          var salesChart = new Chart(salesChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
    });
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/projectschart", true);
      request.send();
    }

    if ($('#offlineProgress').length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let downloads = JSON.parse(this.response);


          var bar = new ProgressBar.Circle(offlineProgress, {
            color: '#000',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 6,
            trailWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: true,
              style : {
                color : "#fff",
                position: 'absolute',
                left: '40%',
                top: '50%'
              }
            },
            svgStyle: {
              width: '90%'
            },
            from: {
              color: '#f1536e',
              width: 6
            },
            to: {
              color: '#f1536e',
              width: 6
            },
            // Set default step function for all animate calls
            step: function(state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);
      
              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }
      
            }
    });
      
          bar.text.style.fontSize = '1rem';
          bar.animate([downloads.offline]); // Number from 0.0 to 1.0
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/downloads", true);
      request.send();
    }

    if ($('#onlineProgress').length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let downloads = JSON.parse(this.response);

          var bar = new ProgressBar.Circle(onlineProgress, {
            color: '#000',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 6,
            trailWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            text: {
              autoStyleContainer: true,
              style : {
                color : "#fff",
                position: 'absolute',
                left: '40%',
                top: '50%'
              }
            },
            svgStyle: {
              width: '90%'
            },
            from: {
              color: '#fda006',
              width: 6
            },
            to: {
              color: '#fda006',
              width: 6
            },
            // Set default step function for all animate calls
            step: function(state, circle) {
              circle.path.setAttribute('stroke', state.color);
              circle.path.setAttribute('stroke-width', state.width);
      
              var value = Math.round(circle.value() * 100);
              if (value === 0) {
                circle.setText('');
              } else {
                circle.setText(value);
              }
      
            }
    });
      
          bar.text.style.fontSize = '1rem';
          bar.animate(downloads.online); // Number from 0.0 to 1.0
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/downloads", true);
      request.send();
    }

    if ($("#revenue-chart").length) {
      let request = new XMLHttpRequest();
        request.onload = function () {
          if (this.readyState == 4 && this.status == 200) {
            let revenue = JSON.parse(this.response);


          var CurrentChartCanvas = $("#revenue-chart").get(0).getContext("2d");
          var CurrentChart = new Chart(CurrentChartCanvas, {
            type: 'bar',
            data: {
              labels: revenue.labels,
              datasets: [{
                  label: revenue.datasets[0].label,
                  data: revenue.datasets[0].data,
                  backgroundColor: '#405189'
                },
                {
                  label: revenue.datasets[1].label,
                  data: revenue.datasets[1].data,
                  backgroundColor: '#3da5f4'
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0
                }
              },
              scales: {
                yAxes: [{
                  display: true,
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    fontColor: "#000",
                    display: true,
                    fontStyle: 400,
                    fontSize: 14,
                    stepSize: 100000,
                    callback: function(value) {
                      var ranges = [
                          { divider: 1e6, suffix: 'M' },
                          { divider: 1e3, suffix: 'k' }
                      ];
                      function formatNumber(n) {
                          for (var i = 0; i < ranges.length; i++) {
                            if (n >= ranges[i].divider) {
                                return (n / ranges[i].divider).toString() + ranges[i].suffix;
                            }
                          }
                          return n;
                      }
                      return formatNumber(value);
                    }
                  }
                }],
                xAxes: [{
                  stacked: false,
                  categoryPercentage: .5,
                  barPercentage: 1,
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#000",
                    display: true,
                    fontSize: 14
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: true
                  },
                }]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            }
    });
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/downloads", true);
      request.send();
    }

    if ($("#distribution-chart").length) {
      let request = new XMLHttpRequest();
        request.onload = function () {
          if (this.readyState == 4 && this.status == 200) {
            let distribution = JSON.parse(this.response);

          var areaData = {
            labels: distribution.labels,
            datasets: [{
                data: distribution.datasets[0].data,
                backgroundColor: [
                  "#3da5f4", "#f1536e", "#fda006"
                ],
                borderColor: "rgba(0,0,0,0)"
              }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            segmentShowStroke: false,
            cutoutPercentage: 72,
            elements: {
              arc: {
                  borderWidth: 4
              }
            },      
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            legendCallback: function(chart) { 
              var text = [];
              text.push('<div class="distribution-chart">');
                let i = 0;
              distribution.datasets[0].city.forEach(city => {
                text.push('<div class="item"><div class="legend-label" style="border: 3px solid ' + chart.data.datasets[0].backgroundColor[i] + '"></div>');
                text.push(`<p>${city}</p>`);
                text.push('</div>');
                i++;
              });
              text.push('</div>');
              return text.join("");
            },
          }
          var distributionChartPlugins = {
            beforeDraw: function(chart) {
              var width = chart.chart.width,
                  height = chart.chart.height,
                  ctx = chart.chart.ctx;
          
              ctx.restore();
              var fontSize = .96;
              ctx.font = "600 " + fontSize + "em sans-serif";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#000";
          
              var text = "70%",
                  textX = Math.round((width - ctx.measureText(text).width) / 2),
                  textY = height / 2;
          
              ctx.fillText(text, textX, textY);
              ctx.save();
            }
          }
          var distributionChartCanvas = $("#distribution-chart").get(0).getContext("2d");
          var distributionChart = new Chart(distributionChartCanvas, {
            type: 'doughnut',
            data: areaData,
            options: areaOptions,
            plugins: distributionChartPlugins
    });
          document.getElementById('distribution-legend').innerHTML = distributionChart.generateLegend();
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/distributionchart", true);
      request.send();
    };

    if ($("#sale-report-chart").length) {
      let request = new XMLHttpRequest();
        request.onload = function () {
          if (this.readyState == 4 && this.status == 200) {
            let saleReport = JSON.parse(this.response);

          var CurrentChartCanvas = $("#sale-report-chart").get(0).getContext("2d");
          var CurrentChart = new Chart(CurrentChartCanvas, {
            type: 'bar',
            data: {
              labels: saleReport.labels,
              datasets: [{
                  label: saleReport.datasets[0].label,
                  data: saleReport.datasets[0].data,
                  backgroundColor: ["#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4","#e0f2ff","#3da5f4"]
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0
                }
              },
              scales: {
                yAxes: [{
                  display: true,
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    fontColor: "#000",
                    display: true,
                    padding: 20,
                    fontSize: 14,
                    stepSize: 10000,
                    callback: function(value) {
                      var ranges = [
                          { divider: 1e6, suffix: 'M' },
                          { divider: 1e3, suffix: 'k' }
                      ];
                      function formatNumber(n) {
                          for (var i = 0; i < ranges.length; i++) {
                            if (n >= ranges[i].divider) {
                                return (n / ranges[i].divider).toString() + ranges[i].suffix;
                            }
                          }
                          return n;
                      }
                      return "$" + formatNumber(value);
                    }
                  }
                }],
                xAxes: [{
                  stacked: false,
                  categoryPercentage: .6,
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#000",
                    display: true,
                    padding: 20,
                    fontSize: 14
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: true
                  },
                  barPercentage: .7
                }]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            }
    });
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/salereportchart", true);
      request.send();
    }

    if ($(".tickets").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let ticketsBox = JSON.parse(this.response);

          ticketsBox.years.forEach(year => {
            $(".tickets").append(`<a class="dropdown-item" data-year="${year}">${year}`);
          });

          ticketsBox.tickets.forEach(ticket => {
            $('.tickets-table').append(
              `<tr>
                <td class="pl-0">
                  <div class="icon-rounded-primary icon-rounded-md">
                    <h4 class="font-weight-medium">${ticket.fullname.match(/\b(\w)/g).join('')}</h4>
                  </div>
                  </td>
                  <td>
                    <p class="mb-0">${ticket.fullname}</p>
                    <p class="text-muted mb-0">${ticket.city}</p>
                  </td>
                  <td>
                    <p class="mb-0">${ticket.date}</p>
                    <p class="text-muted mb-0"> ${ticket.time}</p>
                  </td>
                  <td>
                    <p class="mb-0">${ticket.project}</p>
                    <p class="text-muted mb-0">${ticket.status}</p>
                </td>
              </tr>`);
          });
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/tickets", true);
      request.send();
    }

    if ($(".updates").length) {
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let updates = JSON.parse(this.response);

          updates.updates.forEach(update => {
            $(".updates").append(
              `<li>
                <h6>${update.title}</h6>
                <p class="mt-2">${update.description}</p>
                <p class="text-muted mb-4">
                  <i class="mdi mdi-clock-outline"></i>${update.time}
                </p>
              </li>`);
      });

        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/updates", true);
      request.send();
    }

    if ($(".open-invoices").length) {
      let request = new XMLHttpRequest();

      request.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          let invoices = JSON.parse(this.response);
          invoices.invoices.forEach(invoice => {
            var currentStatus;

            switch (invoice.status) {
              case "Pågående":
                currentStatus = "success"
                break;
              case "Öppen":
                currentStatus = "warning"
                break;
              case "Tillfälligt stoppad":
                currentStatus = "danger"
                break;
            }

            $(".open-invoices").append(
              `<tr>
                <td>${invoice.invoicenumber}</td>
                <td>${invoice.customer}</td>
                <td>${invoice.shipping}</td>
                <td class="font-weight-bold">${invoice.totalprice}</td>
                <td>${invoice.customerprice}</td>
                <td>
                <div class="badge badge-${currentStatus} badge-fw">${invoice.status}</div>
                </td>
              </tr>`);
        });
        }
      }
      request.open("GET", "https://fe18.azurewebsites.net/api/openinvoices", true);
      request.send();
    }

  });
})(jQuery);