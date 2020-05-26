<template>
	<div class="invit">
		<div class="noneBox" v-if="!isRequest">
		  <img src="../assets/cuowu_pic@2x.png" />
		  <p>好像出了点问题...</p>
		  <div class="btn" @click="refreshFn">点击刷新</div>
		</div>
		<template v-else>
			<div class="noneBox" v-if="detail.state === 3 || detail.state === 4">
			  <img src="../assets/del_kong@2x.png" />
			  <p>该帖子已经被
			    <template v-if="detail.state === 3">禁用</template>
			    <template v-if="detail.state === 4">删除</template>
			    ...
			  </p>
			</div>
			<template v-else>
				<div class="infor">
					<div class="pub_list box1">
						<div class="headImg" :style="'background-image: url('+ detail.userAvatarUrl +');'"></div>
						<div class="pub_list_bd">
							<div class="name">{{detail.userNickName}}</div>
							<div class="score">靠谱度：{{detail.userReliable}}</div>
						</div>
						<div class="txt">
							<div class="status">状态：<!-- 当前有效 -->
							  <template v-if="detail.state === 1">正常</template>
							  <template v-else-if="detail.state === 2">暂停</template>
							  <template v-else-if="detail.state === 3">禁用</template>
							  <template v-else-if="detail.state === 4">删除</template>
							</div>
							<div class="time">最后动态：{{detail.lastEventTime}}</div>
						</div>
					</div>
					<div class="pub_list box2">
						<div>
							<template v-if="detail.userGender === 1"><i class="ico ico1-1"></i>男</template>
							<template v-else-if="detail.userGender === 2"><i class="ico ico1-2"></i>女</template>
							<template v-else>未知</template>
						</div>
						<div class="line"></div>
						<div>{{detail.userAge}}岁</div>
						<div class="line"></div>
						<div><i class="ico ico2"></i>{{detail.coordinate}}</div>
						<div class="pub_list_bd">
							<template v-if="detail.logistics === 1"><i class="ico ico3-1"></i>平信</template>
							<template v-else-if="detail.logistics === 2"><i class="ico ico3-2"></i>挂号</template>
							<template v-else-if="detail.logistics === 3"><i class="ico ico3-3"></i>快递</template>
							<template v-else>None</template>
						</div>
					</div>
				</div>
				<div class="detail">
					<div class="title">
						<i class="ico ico1" v-if="detail.type === 2"></i>
						<i class="ico ico2" v-if="detail.type === 3"></i>
						<i class="ico ico3" v-if="detail.type === 1"></i>
					{{detail.title}}</div>
					<div class="article">{{detail.content}}</div>
					<div class="picBox" v-if="detail.imageList && detail.imageList.length > 0">
						<img :src="item.url" v-for="(item,index) in detail.imageList" :key="index" />
					</div>
					<!-- <div class="end">{{detail.lastJoinTime}} 参与过</div> -->
				</div>
			</template>
		</template>
	</div>
</template>

<script>;
	function getQueryVariable(variable)
	{
	       var query = window.location.search.substring(1);
	       var vars = query.split("&");
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	};
	import { getInvitDetail	} from "@/api/api";
	export default {
		name: 'Invit',
		data() {
			return {
				detail: {},
				isRequest:true
			}
		},
		created() {
			console.log("执行",'created');
		},
		mounted() {
			console.log("执行",'mounted');
			this.initData();
		},
		methods: {
			initData() {
				getInvitDetail({
					code: getQueryVariable('code')
				}).then(res => {
					if (res.code === 0) {
						let imgs = res.data.imageList,imagelist=[];
						for(let i = 0;i < imgs.length;i++){
							if(imgs[i].state === 0){
								imagelist.push(imgs[i]);
							}
						}
						res.data.imageList = imagelist;
						this.detail = res.data;
						this.isRequest = true;
					} else {
						this.isRequest = false;
						alert(res.message);
					}
				});
			},
			//刷新
			refreshFn(){
				location.reload();
			}
		}
	}
</script>

<style scoped>
	.noneBox{text-align: center; position: fixed; left: 50%; top: 50%; transform: translate(-50%,-70%);}
	.noneBox p {color: #A6A8AD; font-size: 12px; line-height: 20px; margin: 20px 0 60px;}
	.noneBox .btn{width:107px;height:30px;background:rgba(255,119,91,1);border-radius:2px; line-height: 30px; font-size: 12px; color: #fff; display: inline-block;}
	.invit .infor {
		background: rgba(249, 249, 249, 1);
		border-radius: 4px;
		margin: 10px 15px 15px;
	}

	.invit .infor .box1 {
		margin: 0 15px;
		padding: 20px 0 15px;
		border-bottom: 1px solid #D8D8D8;
	}

	.invit .infor .headImg {
		background: #eee url() no-repeat center;
		background-size: cover;
		width: 50px;
		height: 50px;
		border-radius: 100%;
		overflow: hidden;
		margin-right: 15px;
	}

	.invit .infor .name {
		font-weight: 400;
		color: rgba(55, 68, 90, 1);
		line-height: 20px;
		font-size: 14px;
		max-width: 99%;
	}

	.invit .infor .score {
		font-weight: 400;
		color: rgba(160, 160, 160, 1);
		line-height: 16px;
		font-size: 12px;
		margin-top: 13px;
	}

	.invit .infor .txt {
		text-align: right;
	}

	.invit .infor .status {
		font-weight: 400;
		color: rgba(255, 119, 91, 1);
		line-height: 20px;
		font-size: 12px;
	}

	.invit .infor .time {
		font-weight: 400;
		color: rgba(160, 160, 160, 1);
		line-height: 16px;
		font-size: 12px;
		margin-top: 13px;
	}

	.invit .infor .box2 {
		margin: 0 15px;
		padding: 12px 0 20px;
		font-weight: 400;
		color: rgba(166, 168, 173, 1);
		font-size: 12px;
		line-height: 16px;
	}

	.invit .infor .box2 .pub_list_bd {
		text-align: right;
	}

	.invit .infor .box2 .line {
		width: 0;
		height: 9px;
		border-right: 1px solid #A0A0A0;
		margin: 0 13px;
		opacity: 0.6;
	}

	.invit .infor .box2 .ico {
		display: inline-block;
		width: 11px;
		height: 11px;
		background: url() no-repeat center;
		background-size: contain;
		vertical-align: text-bottom;
		margin-right: 8px;
	}

	.invit .infor .box2 .ico1-1 {
		background-image: url(../assets/boy_icon@2x.png);
	}
	
	.invit .infor .box2 .ico1-2 {
		background-image: url(../assets/girl_icon@2x.png);
	}

	.invit .infor .box2 .ico2 {
		background-image: url(../assets/addr-ico.png);
	}

	.invit .infor .box2 .ico3-1 {
		background-image: url(../assets/pingy_unicon@2x.png);
	}
	.invit .infor .box2 .ico3-2 {
		background-image: url(../assets/guah_unicon@2x.png);
	}
	.invit .infor .box2 .ico3-3 {
		background-image: url(../assets/kuaid_unicon@2x.png);
	}

	.detail {
		margin: 15px;
	}

	.detail .title {
		font-weight: 400;
		color: rgba(55, 68, 90, 1);
		font-size: 15px;
		line-height: 20px;
		margin-bottom: 15px;
	}

	.detail .title .ico {
		display: inline-block;
		width: 25px;
		height: 25px;
		background: url(../assets/ji_icon@2x.png) no-repeat center;
		background-size: contain;
		vertical-align: middle;
		margin-right: 10px;
	}
	.detail .title .ico1{background-image: url(../assets/hu_icon@2x.png);}
	.detail .title .ico2{background-image: url(../assets/san_icon@2x.png);}
	.detail .title .ico3{background-image: url(../assets/ji_icon@2x.png);}

	.detail .article {
		font-weight: 400;
		color: rgba(166, 168, 173, 1);
		line-height: 24px;
		font-size: 13px;
		margin-bottom: 15px;
	}

	.detail .picBox img {
		display: block;
		width: 100%;
		max-width: 100%;
		height: auto;
		margin-bottom: 10px;
	}

	.detail .end {
		text-align: center;
		margin-top: 15px;
		font-weight: 400;
		color: rgba(160, 160, 160, 1);
		font-size: 12px;
		line-height: 16px;
	}


	.invit .tabs {
		border-top: 1px solid #D8D8D8;
		border-bottom: 1px solid #D8D8D8;
		height: 48px;
		font-weight: 400;
		color: rgba(160, 160, 160, 1);
		line-height: 20px;
		font-size: 14px;
	}

	.invit .tabs div {
		margin: 0 20px;
		height: 20px;
	}

	.invit .tabs .on {
		color: rgba(255, 119, 91, 1);
		position: relative;
	}

	.invit .tabs .on::after {
		background-color: rgba(255, 119, 91, 1);
		content: '';
		width: 90%;
		height: 2px;
		position: absolute;
		left: 5%;
		bottom: -14px;
	}

	.invit .tabs .line {
		width: 0;
		height: 14px;
		border-right: 1px solid #A0A0A0;
		margin: 0 5px;
		opacity: 0.6;
	}
</style>
