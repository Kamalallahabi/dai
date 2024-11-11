$("<style>")
  .text(`
    .nosel.d-flex.room.rk0he3mfe41 .label-primary {
        letter-spacing: 1px;
        -webkit-text-fill-color: #0c4f4a;
        border-radius: 15px 0px 15px 0px !important;
        height: 27px;
        margin-top: 60px !important;
        margin-bottom: 0px !important;
        background-color: #d9534f00;
        text-align: left!important;
        margin-left: 40px!important;
        text-shadow: 0px 0px 0px #fff, 0 0 25px #fff, 0 0 5px #fff!important;
        background-image: url(https://up6.cc/2023/03/167959927008681.png);
        background-size: cover;
    }
    
    .nosel.d-flex.room.rk0he3mfe41 .corner.fa.fa-user.label.uc.fa-microphone.label-danger {
        letter-spacing: 1px;
        -webkit-text-fill-color: #0c4f4a;
        border-radius: 15px 0px 15px 0px !important;
        height: 27px;
        margin-top: 60px !important;
        margin-bottom: 0px !important;
        background-color: #d9534f00;
        text-align: left!important;
        margin-left: 40px!important;
        text-shadow: 0px 0px 0px #fff, 0 0 25px #fff, 0 0 5px #fff!important;
        background-image: url(https://up6.cc/2023/03/167959927008681.png);
        background-size: cover;
    }

    .nosel.d-flex.room.rk0he3mfe41.bord {
        border-inline: 0px solid #4c121e !important;
    }

    .nosel.d-flex.room.rk0he3mfe41 .dots.mini.u-msg {
        background-image: url(https://up6.cc/2023/03/167959927008681.png);
        border-radius: 6px;
        background-size: cover;
        text-align: center;
        margin-top: 60px !important;
        margin-left: 11px;
        -webkit-text-fill-color: #000;
    }

    .nosel.d-flex.room.rk0he3mfe41 {
        background-image: url(https://up6.cc/2024/05/171562793731772.gif);
        background-size: cover;
        border-radius: 15px 0px 15px 0px;
        display: inline-block;
    }

    .nosel.d-flex.room.rk0he3mfe41 .fitimg.u-pic.borderg {
        border-radius: 100px;
        border: 2px solid #cc8321;
        background-size: 108% 108%;
        -webkit-text-fill-color: white;
        animation: grad 2s cubic-bezier(.445, .05, .55, .95) alternate infinite;
        min-width: 62px !important;
        width: 62px !important;
        min-height: 60px !important;
        max-height: 60px !important;
        display: none;
    }

    .nosel.d-flex.room.rk0he3mfe41 .u-topic.dots {
        text-transform: uppercase;
        -webkit-text-fill-color: #e8a64d00;
        animation: textclip 2s linear infinite;
        font-size: 22px !important;
        -webkit-background-clip: text;
        color: transparent !important;
        margin-top: 10px;
        display: none;
    }

    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }

    #chats.sudia {
        background-image: url(https://up6.cc/2024/05/171562793730591.jpg);
        background-size: 100%;
    }
  `).appendTo("head");

var myroom = false;
setInterval(function() {
    if (!myroom && $("#chats").hasClass("sudia")) {
        myroom = true;
        $('#chats').addClass('k0he3mfe41');
    } else if (myroom && !$("#chats").hasClass("sudia")) {
        myroom = false;
        $("#chats").removeClass("k0he3mfe41");
    }
}, 20);
