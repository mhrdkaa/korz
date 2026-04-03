self.addEventListener("backgroundfetchsuccess", (e) => {
    console.log(e.registration.downloaded);
});  