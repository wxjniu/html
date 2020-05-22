<template>
	<div class="invit">
		<div class="infor">
			<div class="pub_list box1">
				<div class="headImg" :style="'background-image: url('+ detail.userAvatarUrl +');'"></div>
				<div class="pub_list_bd">
					<div class="name">{{detail.userNickName}}</div>
					<div class="score">靠谱度：{{detail.userReliable}}</div>
				</div>
				<div class="txt">
					<div class="status">状态：当前有效</div>
					<div class="time">最后动态：{{detail.lastEventTime}}</div>
				</div>
			</div>
			<div class="pub_list box2">
				<div><i class="ico ico1"></i>
					<template v-if="detail.userGender == '1'">男</template>
					<template v-else>女</template>
				</div>
				<div class="line"></div>
				<div>{{detail.userAge}}岁</div>
				<div class="line"></div>
				<div><i class="ico ico2"></i>{{detail.coordinate}}</div>
				<div class="pub_list_bd"><i class="ico ico3"></i>快递</div>
			</div>
		</div>

		<div class="detail">
			<div class="title"><i class="ico"></i>{{detail.title}}</div>
			<div class="article">{{detail.content}}</div>
			<div class="picBox" v-if="detail.imageList && detail.imageList.length > 0">
				<img :src="item.url" v-for="(item,index) in detail.imageList" :key="index" />
			</div>
			<!-- <div class="end">{{detail.lastJoinTime}} 参与过</div> -->
		</div>

	</div>
</template>

<script>
	import {
		getInvitDetail,
		getInvitList
	} from "@/api/api";
	export default {
		name: 'Invit',
		data() {
			return {
				detail: {}
			}
		},
		mounted() {
			this.initData();
		},
		methods: {
			initData() {
				getInvitDetail({
					code: '202005130001'
				}).then(res => {
					if (res.code === 0) {
						let imgs = res.data.imageList,imagelist=[];
						for(let i = 0;i < imgs.length;i++){
							if(imgs[i].url !== ''){
								imagelist.push(imgs[i]);
							}
						}
						res.data.imageList = imagelist;
						this.detail = res.data;
					} else {
						alert(res.message);
					}
				});
				getInvitList({
				  PageSize:15,
				  PageNo:1
				},(res)=>{
				});
			}
		}
	}
</script>

<style scoped>
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
		vertical-align: middle;
	}

	.invit .infor .box2 .ico1 {
		background-image: url();
	}

	.invit .infor .box2 .ico2 {
		background-image: url();
	}

	.invit .infor .box2 .ico3 {
		background-image: url();
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
		background: url() no-repeat center;
		background-size: contain;
		vertical-align: middle;
		margin-right: 10px;
	}

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
