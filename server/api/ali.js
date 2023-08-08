export default defineEventHandler(async(event) =>{

    //  const {name} = useQuery(event)


    //  const {age} = await useBody(event)

     const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_NkwhkItam448bGMGpx1QzVZY8wBv9S2Y7gsC2NCL')

     
    return data
})