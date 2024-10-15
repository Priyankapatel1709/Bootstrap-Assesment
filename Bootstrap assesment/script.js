

$(document).on("click", ".gallery-item", function () {

    const src = $(this).attr("src");

    $(".modal-img").attr("src", src);

    const myModal = new bootstrap.Modal($("#gallery-popup")[0]);

    myModal.show();
});
