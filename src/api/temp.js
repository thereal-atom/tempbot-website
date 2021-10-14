const api_url = "http://localhost:50451"
const getTemp = async (guildId) => {
    const data = await fetch(`${api_url}/dashboard/${guildId}/temp`);
    console.log(data);
    return data;
}

module.exports = {
    getTemp,
}