const day = 'monday'

switch (day) {
    case 'monday':
        console.log('Plan course structure')
        console.log('Go to coding meetup')
        break
    case 'tuesday':
        console.log("Prepare thoery videos")
    case 'wednesday':
    case 'thursday':
        console.log('Go to de gym')
        break
    case 'friday':
        console.log('Record videos for my channel')
        break
    case 'sunday':
        console.log('Enjoy the weekend !!!!')
    default:
        console.log('Not a valid day')
        break
}