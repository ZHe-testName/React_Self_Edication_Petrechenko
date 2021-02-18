'use strict';

const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(name => name.length > 0)
                                .map(name => name.toLocaleLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash({cash} = {cash: [0]}){
    return cash.reduce((acc, num) => num + acc);
};

const money = calcCash(sponsors);

function makeBusiness([owner, director = 'Victor', cash, emp]){
    const {eu, rus} = sponsors;

console.log(
`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors: 
${[...eu, ...rus, 'unexpected sponsor']}
Note. Be careful with ${eu[0]}. It's a huge risk.`
);

};

makeBusiness(['Sam',, money, employersNames]);
