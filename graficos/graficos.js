

function mostraCotacao(){
    fetch('10.135.236.34:5500/AJAX/cotacoes.html').then(function(resultado){
        return resultado.text();
    }).then(function(cotacoes){

        var retJson = JSON.parse(ret);

        console.log(retJson[])

new Morris.Line({
    element: 'line',
    data: [
      { year: '2008', value: 642 },
      { year: '2009', value: 845 },
      { year: '2010', value: 345 },
      { year: '2011', value: 467 },
      { year: '2012', value: 750 }
    ],
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value']
  });

  new Morris.Donut({
    element: 'donut',
    data: [
      { year: '2008', value: 642 },
      { year: '2009', value: 845 },
      { year: '2010', value: 345 },
      { year: '2011', value: 467 },
      { year: '2012', value: 750 }
    ],
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value']
  });

  new Morris.Bar({
    element: 'bar',
    data: [
      { year: '2008', value: 642 },
      { year: '2009', value: 845 },
      { year: '2010', value: 345 },
      { year: '2011', value: 467 },
      { year: '2012', value: 750 }
    ],
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value']
  });
