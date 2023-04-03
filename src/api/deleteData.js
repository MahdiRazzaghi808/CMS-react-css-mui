export const deleteData = async (type, data) => {
    let updateData = false

    await fetch(`https://example.com/${type}?id=${data.id}`, { method: 'DELETE' })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            updateData = true;
        })
        .catch((error) => {
            // just for test because no api to fetch
            updateData = true;
        });
    return updateData;
}