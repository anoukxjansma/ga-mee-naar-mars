Chart.defaults.global.defaultFontColor = 'white';


var ctx = document.getElementById('myChartPie').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Waterstof', 'Helium', 'Elektromagnetische straling', 'Neutrino'],
        datasets: [{
            label: 'Buiten omgeving samenstelling',
            data: [3, 2, 3, 4],
            backgroundColor: [
                '#5083ea',
                '#d1c1d6',
                '#9b0aef',
                '#eaab0c',
            ],
            borderColor: [
                '#1e1e3a',
                '#1e1e3a',
                '#1e1e3a',
                '#1e1e3a',
            ],
            borderWidth: 6
        }]
    },

options: {
    responsive: true,
    maintainAspectRatio:false,
    title: {
        display: true,
        text: 'Samenstelling buiten omgeving'
    },
    
    
}
    
});