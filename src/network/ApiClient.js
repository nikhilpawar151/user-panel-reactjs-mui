export const getApiCall = async url => {
    let response = "";
    try {
        await fetch(url)
        .then(response => {
            if(!response.ok){
                console.log(`HTTP error! Status: ${response.status}`)
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => response = data)
        return response
    }catch(error){
        throw new Error("Error in fetching data " +  error.message)
    }
}