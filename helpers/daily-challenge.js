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
        },
        {
            title: "Cook one homemade meal today",
            image: '../public/images/cook.jpeg'
        },
        {
            title: "Compliment someone today",
            image: '../public/images/compliment'
        },
        {
            title: "Write down 3 things you are grateful for today",
            image:  '..public/images/grateful.jpg'
        },
        {
            title: "Start reading a book today",
            image: '../public/images/reading.jpg'
        },
        {
            title: "Go to sleep early today",
            image: '../public/images/sleep.jpg'
        },
        {
            title: "Do one random act of kindness today",
            image: '../public/images/kindness.jpg'
        },
        {
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