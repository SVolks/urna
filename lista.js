let etapas = [
    {
        titulo: 'VEREADOR',
        avisoNumeros: 'Aperte os números:\n36980 para o vereador Njal\n12457 para vereador Frode',
        numeros: 5,
        candidatos: [
            {
                numero: '36980',
                name: 'Njal',
                partido: 'ABC',
                fotos:[
                    {url:'./Images/Candidato 1.png', legenda:'Vereador'}
                ]
            },
            {
                numero: '12457',
                name: 'Frode',
                partido: 'DEFG',
                fotos:[
                    {url:'./Images/Candidato 2.png', legenda: 'Vereador'}
                ]
            },
        ]
    },
    {
        titulo: 'PREFEITO',
        avisoNumeros: 'Aperte os números: \n 10 para o vereador Trygve \n 75 para vereador Sten',
        numeros: 2,
        candidatos: [
            {
                numero: '10',
                name: 'Trygve',
                partido: 'ABC',
                vice: 'Gunnar',
                fotos:[
                    {url:'./Images/Vereador 1.jpeg', legenda: 'Prefeito'},
                    {url:'./Images/Vice 1.png', legenda: 'Vice-Prefeito', small: true}
                ]
            },
            {
                numero: '75',
                name: 'Sten',
                partido: 'QWERTY',
                vice: 'Svend',
                fotos:[
                    {url:'./Images/Vereador 2.png', legenda: 'Prefeito'},
                    {url:'./Images/Vice 2.jpeg', legenda: 'Vice-Prefeito', small: true},
                ]
            },
        ]
    }
];