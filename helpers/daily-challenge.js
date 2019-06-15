function challengeOfTheDay() {
    var challenges = [{
            title: "Drink 64oz of water today",
            image: '../public/images/water.jpg'
        },
        {
            title: "Walk 10 thousand steps today",
            image: '../public/images/walk.jpg'
        },
        {
            title: "Create a spending plan",
            image: '../public/images/financial.jpg'
        }
    ]

    const date1 = new Date('6/14/2019');
    const date2 = new Date();
    console.log(date2)
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    var roundedDays = diffDays % challenges.length

    var challenge = challenges[roundedDays];

    return challenge
}

module.exports = challengeOfTheDay();