export const getNationality = async () => {
    const url = "https://restcountries.com/v3.1/all"
    const resp = await fetch(url)
    const data = await resp.json()
    const nationality = data.map((item:any) => ({
        label: item.name.common,
        value: item.name.common,
    }))
    return nationality
}
