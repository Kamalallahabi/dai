<script>
    $(document).ready(function() {
        var myroom = 'k0he3mfe41';
        console.log('تم تحديد الروم:', myroom);

        // إضافة الأنماط الخاصة بالروم داخل العنصر <style> 
        var styles = `
            #d2 .roomh[onclick="rjoin('${myroom}')"] {
                border: 0px solid #0000;
                background-image: url(https://up6.cc/2024/11/173049776038081.jpg);
                background-size: 100%;
                color: #f9f9f9;
                border-radius: 50px !important;
                background-color: #000 !important;
            }
        `;
        
        $("<style>").text(styles).appendTo("head");

        // تحديث العناصر داخل الغرفة
        $("div[id^='room']").each(function () {
            var originalData = $(this).html();
            console.log('بيانات العنصر قبل التعديل:', originalData);
            $(this).html('<b>' + originalData + '</b>');
        });
    });
</script>


<style>
    .nosel.d-flex.room.rk0he3mfe41 .label-primary {
        letter-spacing: 2px !important;
        color: #fff !important;
        background-color: #d9534f00 !important;
        text-align: center !important;
        text-shadow: 1px 1px 2px #00b4ff, 0 0 25px #00b4ff, 0 0 5px #00b4ff !important;
        margin-left: 20px !important;
        height: 27px !important;
        margin-top: 120px !important;
        margin-bottom: 0px !important;
    }

    .nosel.d-flex.room.rk0he3mfe41 .corner.fa.fa-user.label.uc.fa-microphone.label-danger {
        letter-spacing: 2px !important;
        color: #fff !important;
        margin-left: 20px !important;
        height: 27px !important;
        margin-top: 120px !important;
        background-color: #d9534f00 !important;
        text-shadow: 1px 1px 2px #00b4ff, 0 0 25px #00b4ff, 0 0 5px #00b4ff !important;
        text-align: center !important;
    }

    .nosel.d-flex.room.rk0he3mfe41.bord {
        border-inline: 0px solid #4c121e !important;
    }

    .nosel.d-flex.room.rk0he3mfe41 .dots.mini.u-msg {
        text-align: center;
        margin-top: 0px !important;
        -webkit-text-fill-color: transparent;
        animation: textclip 2s linear infinite;
        color: transparent !important;
        background-size: 100% 100%;
    }

    .nosel.d-flex.room.rk0he3mfe41 {
        background-image: url(https://up6.cc/2024/11/173049854693241.gif);
        background-size: cover;
        border-radius: 0px 15px 0px 15px;
        display: inline-block;
        margin-bottom: 3px !important;
        margin-top: 2px !important;
    }

    .nosel.d-flex.room.rk0he3mfe41 .fitimg.u-pic.borderg {
        border-radius: 100px;
        border: 2px solid #cc8321;
        background-size: 108% 108%;
        animation: grad 2s cubic-bezier(.445,.05,.55,.95) alternate infinite;
        min-width: 62px !important;
        width: 62px !important;
        min-height: 60px !important;
        max-height: 60px !important;
        display: none;
    }

    .nosel.d-flex.room.rk0he3mfe41 .u-topic.dots {
        text-transform: uppercase;
        animation: textclip 2s linear infinite;
        font-size: 22px !important;
        background-image: url(https://up6.cc/2023/02/167744995843271.png);
        -webkit-background-clip: text;
        color: transparent !important;
        background-size: 100% 100%;
        margin-top: 10px;
        display: none;
    }

    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }

    #mic.belia .mic {
        border: 0px solid;
        animation: .5s linear 1s infinite alternate slidein;
        filter: hue-rotate(0);
        box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 5px rgb(0 0 0), 0 0 0 0px #000000;
        margin: 3px;
        margin-top: 1px;
        height: 48px;
        border-radius: 100px;
    }

    @keyframes rotate {
        to {
            --angle: 360deg;
        }
    }

    @property --angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }
</style>

