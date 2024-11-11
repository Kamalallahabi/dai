// إضافة CSS مخصص للغرفة مع التأكيد على !important
$("<style>").text(`
    .nosel.d-flex.room.rk0he3mfe41 .label-primary {
        letter-spacing: 1px;
        color: #0c4f4a !important;
        border-radius: 15px 0 15px 0 !important;
        height: 27px;
        margin-top: 60px !important;
        background-color: transparent !important;
        text-shadow: 0 0 0 #fff, 0 0 25px #fff, 0 0 5px #fff !important;
        background-image: url(https://up6.cc/2023/03/167959927008681.png) !important;
        background-size: cover !important;
    }

    .nosel.d-flex.room.rk0he3mfe41 .corner.fa.fa-user.label.uc.fa-microphone.label-danger {
        letter-spacing: 1px;
        color: #0c4f4a !important;
        border-radius: 15px 0 15px 0 !important;
        height: 27px !important;
        margin-top: 60px !important;
        background-color: transparent !important;
        text-shadow: 0 0 0 #fff, 0 0 25px #fff, 0 0 5px #fff !important;
        background-image: url(https://up6.cc/2023/03/167959927008681.png) !important;
        background-size: cover !important;
    }

    .nosel.d-flex.room.rk0he3mfe41.bord {
        border-inline: 0 !important;
    }

    .nosel.d-flex.room.rk0he3mfe41 .dots.mini.u-msg {
        background-image: url(https://up6.cc/2023/03/167959927008681.png) !important;
        border-radius: 6px !important;
        background-size: cover !important;
        text-align: center !important;
        margin-top: 60px !important;
        margin-left: 11px !important;
        color: #000 !important;
    }

    .nosel.d-flex.room.rk0he3mfe41 {
        background-image: url(https://up6.cc/2024/05/171562793731772.gif) !important;
        background-size: cover !important;
        border-radius: 15px 0 15px 0 !important;
    }

    .nosel.d-flex.room.rk0he3mfe41 .fitimg.u-pic.borderg {
        border-radius: 100px !important;
        border: 2px solid #cc8321 !important;
        background-size: 108% 108% !important;
        min-width: 62px !important;
        width: 62px !important;
        min-height: 60px !important;
        max-height: 60px !important;
        display: none !important;
    }

    .nosel.d-flex.room.rk0he3mfe41 .u-topic.dots {
        text-transform: uppercase !important;
        color: transparent !important;
        font-size: 22px !important;
        background-clip: text !important;
        animation: textclip 2s linear infinite !important;
        display: none !important;
    }

    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
`).appendTo("head");

// تفعيل الأنماط عند الانضمام للغرفة
let myroom = false;
setInterval(function() {
    if (myroom !== "k0he3mfe41") {
        myroom = "k0he3mfe41";
        $('#chats').addClass('rk0he3mfe41');
    } else if (myroom) {
        myroom = false;
        $("#chats").removeClass("rk0he3mfe41");
    }
}, 20);
