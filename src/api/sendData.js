export const sendData = async (type, sendType, data) => {
    // type ==> user/product
    // sebType ===> update/crate
    // data ===> userData/productData
    let flagSend = false

    if (sendType) {

        await fetch(`https://example.com/${type}?id=${data.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                // test 
                flagSend = true;
            });
    } else {

        await fetch(`https://example.com/${type}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                // test
                flagSend = true;
            });
    }




    return flagSend
}