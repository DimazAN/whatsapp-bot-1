function help() {
    return `
*「 NCT BOT 」*

Dibawah ini adalah command yang dapat Anda gunakan!

「 GROUP ONLY 」
➣ *!add 62858xxxxx*
➣ *!kick @tagmember*
➣ *!promote @tagmember*
➣ *!demote @tagadmin*
➣ *!mentionAll*
➣ *!adminList*
➣ *!ownerGroup*
➣ *!leave*
➣ *!linkGroup*
➣ *!delete [replyChatBot]*
➣ *!kickAll*
➣ *!NSFW [enable|disable]*
➣ *!welcome [enable|disable]*

「 DOWNLOADER MENU 」
➣ *!ytmp3 [linkYt]*
➣ *!ytmp4 [linkYt]*
➣ *!ig [linkIg]*
➣ *!fb [linkFb]*

「 OTHER MENU 」
➣ *!sticker*
➣ *!stickerGif*
➣ *!creator*
➣ *!neko*
➣ *!inu*
➣ *!jadwalShalat [daerah]*
➣ *!jadwalTv [channel]*
➣ *!cuaca [tempat]*
➣ *!tts [kode bhs] [teks]*
➣ *!igStalk [@username]*
➣ *!wiki [query]*
➣ *!anime [query]*
➣ *!brainly [pertanyaan] [.jumlah]*
➣ *!loli*
➣ *!waifu*
➣ *!husbu*
➣ *!randomNekoNime*
➣ *!randomTrapNime*
➣ *!randomAnime*
➣ *!info*
➣ *!infoGempa*
➣ *!meme*
➣ *!quotemaker [|teks|author|theme]*
➣ *!join [linkGroup]*
➣ *!quotes*
➣ *!quotesnime*
➣ *!wait*
➣ *!nulis [teks]*
➣ *!donasi*
➣ *!lirik [optional]*
➣ *!chord [query]*

➣ Kirim perintah dengan ketik *!readme* untuk mengetahui fungsi dan cara penggunaan perintah di atas *WAJIB BACA!!*`
}
exports.help = help()
function readme() {
    return `
*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp3 https://youtu.be/Bskehapzke8*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *!ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *!fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*
  *NOTE*: Pastikan bahwa tautan postingan yang Anda salin dan ingin download bukan dari akun/grup yang di private!

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalShalat Tuban*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalTv Indosiar*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *!cuaca Tuban*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *!tts id Test*
  *NOTE*: Maksimal 250 huruf

*[@username]* Diisi dengan username Instagram yang valid, tanpa tanda “[” dan “]”
Contoh : *!igStalk @mas.dimaz_*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *!quotemaker |Wes Tau Ditinggal De'e|Wahyu|Heartbreak*

*[linkGroup]* Diisi dengan link grup Whatsapp yang valid, tanpa tanda “[” dan “]”.
Contoh : *!join https://chat.whatsapp.com/Bhhw77d5t2gjao8*

*[optional]* Diisi dengan teks/judul lagu, tanpa tanda “[” dan “]”.
Contoh : *!lirik Apa Elo Tega*`
}
exports.readme = readme()
function info() {
    return `BOT ini dibuat dengan bahasa pemrograman *Node.js / JavaScript*

Owner BOT : wa.me/6282140604765
Follow Instagram ngab : https://Instagram.com/mas.dimaz_

Source kode bot : https://github.com/mhankbarbar/whatsapp-bot
Perubahan saya : https://github.com/DimazAN/whatsapp-bot-1

Thanks !`
}
exports.info = info()
function snk() {
    return `Syarat dan Ketentuan *NCT BOT*
1. Teks dan nama pengguna WhatsApp Anda akan kami simpan di dalam server selama bot aktif;
2. Data Anda akan dihapus ketika bot offline;
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang Anda kirim;
4. Kami tidak akan pernah meminta Anda untuk memberikan informasi pribadi!
5. Jika menemukan _Bug/Error_ silahkan langsung lapor ke OWNER BOT
6. Apapun yang Anda perintah pada bot ini, *KAMI TIDAK AKAN BERTANGGUNG JAWAB!*

Thanks !`
}
exports.snk = snk()
function donate() {
    return `Mau donasi?
    
Kalo mau donasi langsung ke :
OVO/PULSA/GOPAY : 085892766102
SAWERIA : https://saweria.co/donate/mhankbarbar

Thanks !`
}
exports.donate = donate()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NET.
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
