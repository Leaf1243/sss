const canvas = document.getElementById('gameCanvas');  
const ctx = canvas.getContext('2d');  

let player = {  
5 hours ago

Update game.js
    x: canvas.width / 2 - 25, // プレイヤーをキャンバスの中央に配置  
    y: canvas.height - 50, // プレイヤーの高さを考慮  
5 hours ago

Create game.js
    width: 50,  
    height: 50,  
5 hours ago

Update game.js
    speed: 20 // プレイヤーの速度  
5 hours ago

Create game.js
};  

let lasers = [];  
let enemies = [];  
let score = 0;  
5 hours ago

Update game.js
let gameOver = false; // ゲームオーバーの状態を管理  
5 hours ago

Create game.js

// 敵の生成  
function createEnemy() {  
    const enemy = {  
        x: Math.random() * (canvas.width - 50),  
        y: 0,  
        width: 50,  
        height: 50,  
        speed: 2,  
    };  
    enemies.push(enemy);  
}  

// レーザーの発射  
function shootLaser() {  
    const laser = {  
        x: player.x + player.width / 2 - 2.5,  
        y: player.y,  
        width: 5,  
        height: 20,  
        speed: 5,  
    };  
    lasers.push(laser);  
}  

5 hours ago

Update game.js
// 衝突判定  
function checkCollision() {  
    // レーザーと敵の衝突判定  
5 hours ago

Create game.js
    for (let i = lasers.length - 1; i >= 0; i--) {  
        for (let j = enemies.length - 1; j >= 0; j--) {  
5 hours ago

Update game.js
            if (              
5 hours ago

Create game.js
                lasers[i].x < enemies[j].x + enemies[j].width &&  
                lasers[i].x + lasers[i].width > enemies[j].x &&  
                lasers[i].y < enemies[j].y + enemies[j].height &&  
                lasers[i].y + lasers[i].height > enemies[j].y  
            ) {  
                lasers.splice(i, 1);  
                enemies.splice(j, 1);  
                score++;  
                break;  
            }  
        }  
    }  

5 hours ago

Update game.js
    // プレイヤーと敵の衝突判定  
5 hours ago

Update game.js
    for (let enemy of enemies) {  
        if (  
            player.x < enemy.x + enemy.width &&  
            player.x + player.width > enemy.x &&  
            player.y < enemy.y + enemy.height &&  
            player.y + player.height > enemy.y  
        ) {  
5 hours ago

Update game.js
            gameOver = true; // 衝突があった場合はゲームオーバー  
5 hours ago

Update game.js
            break;  
        }  
    }  
}  

5 hours ago

Create game.js
// ゲームの更新  
function update() {  
5 hours ago

Update game.js
    if (gameOver) return; // ゲームオーバーの場合は更新しない  

5 hours ago

Create game.js
    lasers.forEach(laser => {  
        laser.y -= laser.speed;  
    });  

    enemies.forEach(enemy => {  
        enemy.y += enemy.speed;  
    });  

    // レーザーが画面外に出たら削除  
    lasers = lasers.filter(laser => laser.y > 0);  
    enemies = enemies.filter(enemy => enemy.y < canvas.height);  
    
5 hours ago

Update game.js
    checkCollision();  
5 hours ago

Create game.js
}  

// 描画  
function draw() {  
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
    
    // プレイヤー  
    ctx.fillStyle = 'blue';  
    ctx.fillRect(player.x, player.y, player.width, player.height);  
    
    // レーザー  
    ctx.fillStyle = 'red';  
    lasers.forEach(laser => {  
        ctx.fillRect(laser.x, laser.y, laser.width, laser.height);  
    });  

    // 敵  
    ctx.fillStyle = 'green';  
    enemies.forEach(enemy => {  
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);  
    });  

    // スコア表示  
    ctx.fillStyle = 'black';  
    ctx.font = '20px Arial';  
