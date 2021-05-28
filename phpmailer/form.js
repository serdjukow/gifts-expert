const callBackThanks = document.querySelector('.callback__thanks')
function send(event, php) {
	console.log("Отправка запроса");
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function () {
		if (req.status >= 200 && req.status < 400) {
			json = JSON.parse(this.response);
			if (json.result == "success") {
				callBackThanks.classList.add('show')
				event.target.reset()
				console.log("Сообщение отправлено")
			} else {
				// Если произошла ошибка
				console.log("Ошибка. Сообщение не отправлено");
			}
		} else { console.log("Ошибка сервера. Номер: " + req.status); }
	};
	req.onerror = function () { console.log("Ошибка отправки запроса"); };
	req.send(new FormData(event.target));
}