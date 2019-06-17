function challengeOfTheDay() {
    var challenges = [{
            id: 1,
            title: "Drink 64oz of water today",
            image: '../public/images/water.jpg'
        },
        {
            id: 2,
            title: "Walk 10 thousand steps today",
            image: '../public/images/walk.jpg'
        },
        {
            id: 3,
            title: "Create a spending plan",
            image: '../public/images/financial.jpg'
        },
        {
            id: 4,
            title: "Cook one homemade meal today",
            image: '../public/images/cook.jpeg'
        },
        {
            id: 5,
            title: "Compliment someone today",
            image: '../public/images/compliment'
        },
        {
            id: 6,
            title: "Write down 3 things you are grateful for today",
            image:  '..public/images/grateful.jpg'
        },
        {
            id: 7,
            title: "Start reading a book today",
            image: '../public/images/reading.jpg'
        },
        {
            id: 8,
            title: "Go to sleep early today",
            image: '../public/images/sleep.jpg'
        },
        {
            id: 9,
            title: "Do one random act of kindness today",
            image: '../public/images/kindness.jpg'
        },
        {
            id: 10,
            title: "Try a new hobby today",
            image: '../public/images/hobby.png'
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
