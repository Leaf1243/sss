const canvas = document.getElementById('gameCanvas');  
const ctx = canvas.getContext('2d');  

let player = {  
    x: canvas.width / 2 - 25, // プレイヤーをキャンバスの中央に配置  
    y: canvas.height - 50, // プレイヤーの高さを考慮  
    width: 50,  
    height: 50, 
