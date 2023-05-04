let tg = window.Telegram.WebApp;
order.addEventListener("click", () => {
    function submitForm() {
    let bookName = document.getElementById("book-name").value;
    let bookAuthor = document.getElementById("book-author").value;

    let data = {
        name: bookName,
        author: bookAuthor
    }
    tg.sendData(JSON.stringify(data));
    console.log('smth')
    tg.close();
}});