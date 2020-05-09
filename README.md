# Account login

基礎的登入功能採 Cookie-based Authentication 登入方式實作

![screenshot ](https://github.com/mk900/basic-account-login/blob/adv/screenshot.GIF)

## 功能表

- 在登入頁面，使用者輸入正確 email 和對應 password 將登入歡迎頁面
- 在登入頁面，若使用者輸入錯誤，將顯示錯誤訊息
- 在登入頁面，使用者勾選**記住我**，即使下次登入失敗也將保留 email 欄位
- 使用者在歡迎頁面，可點擊**logout**，回到登入頁面

## 測試帳號

|     |               Email |         Password |
| --: | ------------------: | ---------------: |
|   1 |      tony@stark.com |       iamironman |
|   2 | captain@hotmail.com | icandothisallday |
|   3 |    peter@parker.com |         enajyram |
|   4 |   natasha@gamil.com |     \*parol#@\$! |
|   5 |     nick@shield.com |         password |

## Requirement
- [Node.js]

## Packages
- [express]
- [express-handlebars]
- [body-parser]
- [express-session]

## Installing
透過 `git clone` 指令將專案下載下來到本機端

開啟終端機 (Terminal)，進入資料夾內

執行 `npm install`，將專案所需套件下載下來

套件安裝完畢後，用專案所設定的統一指令 `npm run dev`，即可執行專案

預設 port 為 3000，請直接打開瀏覽器，並在 URL 輸入 http://localhost:3000/ 即可瀏覽網頁