const express = require('express');
const router = express.Router();

const user_controller = require('users');
const game_controller = require('game');
const home_controller = require('home');


router.get('/',home_controller.home);
//user_controller
router.post('/api/v1/create_user',user_controller.create);
router.get('/api/v1/hit:hand_id',user_controller.hit);
router.get('/api/v1/stand:had_id',user_controller.stand);
router.get('/api/v1/double_down/:hand_id');
router.get('/api/v1/split/:hand_id');
 

router.post('/api/v1/deal',game_controller.deal);
router.post('/api/v1/insurance');


//game controller
router.post('/api/v1/create_game',game_controller.createGame);
router.get('/api/v1/status/:game_id');
router.get('/api/v1/winner/:game_id');
router.get('/api/v1/finish_game/:game_id');

module.exports = router;