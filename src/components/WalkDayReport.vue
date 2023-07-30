<template>
    <div id="background">
        <div id="dailyreport">
            <div class="reportbody">
                <div class="walkfriend">
                    <h1>동행한 사람</h1>
                    <div class="person-container">
                        <img src="../assets/people/Preview-8.png">
                        <img src="../assets/people/Preview-3.png">
                    </div>
                </div>
                <div class="todaypoint">
                    <p>획득한<br/>도토리</p>
                    <div class="point-container">
                        <img v-for="(image, index) in images" :key="index" :src="image" class="point" />
                    </div>
                </div>

                <div class="todaydata_1">
                    <div class="walk">
                        <img src="../assets/walkicon.png">
                        <p>{{steps}} 걸음</p>

                    </div>
                    <div class="kcal">
                        <img src="../assets/kcal.png">
                        <p>{{calculateCaloriesBurned(this.totalDistance)}} 칼로리</p>
                        
                    </div>
                </div>

                <div class="todaydata_2">
                    <div class="time">
                        <img src="../assets/timericon.png">
                        <p>{{ totalTime }}</p>
                        <KakaoMap />
                    </div>
                    
                    <div class="long">
                        <img src="../assets/distanceicon.png">
                        <p>{{ totalDistance.toFixed(2)  }} KM</p>
                    </div>
                </div>
            </div>
            <button class="walkclose" @click="$router.push('/MainPage')">닫기</button>
        </div>
    </div>
</template>

<script>
import pointImage from '@/assets/point.png';
import getpointImage from '@/assets/getpoint.png';

export default {
  name: 'WalkDayReport',
    data() {
        return {
            timeData: {
                min: 0,
                seconds: 0
            },
            totalDistance : 0,
            images: Array(5).fill(pointImage),
            steps : 0,

        };
    },

    mounted() {
        this.timeData = {
        min: parseInt(this.$route.query.min),
        seconds: parseInt(this.$route.query.seconds)
        };
        console.log('timeData:', this.timeData);

        this.totalDistance = parseFloat(this.$route.query.distance); // Assign the value of distance to totalDistance
        this.steps = parseInt(this.$route.query.steps); // 걸음수 데이터

        this.changeImages();
    },
    computed: {
        totalTime() {
        return `${this.timeData.min.toString().padStart(2, '0')}:${this.timeData.seconds.toString().padStart(2, '0')}`;
        },
        formattedTotalDistance() {
            return this.totalDistance.toFixed(2); // Format totalDistance with desired precision
        },
        calculateCaloriesBurned() {
            return (distance) => {
                const calories = distance * 65; // Replace with your own formula
                return calories.toFixed(0); // Format calories with desired precision
            }
        },
    },
    methods: {
        changeImages() {
            const numImageChanges = Math.floor(this.timeData.seconds / 5);
            const newImage = getpointImage;

            for (let i = 0; i < numImageChanges; i++) {
                if (i < this.images.length) {
                // Replace the image at the current index with the new image
                this.images.splice(i, 1, newImage);
                }
            }
        }
    }
}
</script>

<style scoped>

#background {
    background-color: #F1F8FF;
    position: relative;
    width: inherit;
    padding: 40px;
    height: 100vh;
}

#dailyreport {
    background-color: rgb(255, 255, 255);
    border-radius: 50px;
    height: 73%;
    margin-top: 1vh;
    padding: 50px 0;

}
.todaypoint {
    padding: 0 70px;
    display: flex; /* 추가 */
}

.point-container {
    display: flex;
}

.walkfriend {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 7px solid rgb(179, 179, 179);
    background-color: rgb(255, 255, 255);
    height: 8vh;
    border-radius: 30px;
    margin: 19px 0;
    padding: 0 20px;
}

.walkfriend h1 {
    font-size: 2vh;
    margin: 0 10px;
}

.person-container {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.person-container img {
    margin: 0 5px;
}

.todaypoint {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 7px solid rgb(179, 179, 179);
    background-color: rgb(255, 255, 255);
    height: 8vh;
    border-radius: 30px;
    margin: 19px 0;
    padding: 0 20px;
}

.todaypoint p {
    font-weight: bold;
    text-align: center;
    font-size: 2vh;
    margin-right: 10px;
}

.point-container {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.point {
    width: 3vh;
    height: 3vh;
    margin-right: 5px;
}

.reportbody {
    background-color: rgba(218, 213, 213, 0.893);
    display: block;
    height: 90%;
    padding: 23px;
}

.walkfriend img {
    text-align: right;
    margin: 5px;
    width:5vh;
}

.walkfriend, .todaypoint{
    border: 7px solid rgb(179, 179, 179);
    background-color: rgb(255, 255, 255);
    height: 9vh;
    border-radius: 30px;
    text-align: left;
    margin: 1vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
}

.todaydata_1, .todaydata_2{
    height : 20vh;
    width: 100%;
    display: flex; 
    margin: auto;
    margin-left: 0%;
}

.todaydata_1 img, .todaydata_2 img {
    width: 8vh;
    margin: 2vh;
    
}

.todaydata_1 p, .todaydata_2 p {
    font-size: 3vh;
}


.walk, .kcal, .time, .long {
    flex: 1;
    background-color:rgb(228, 228, 228);
    border: 5px solid rgb(142, 141, 141);
}

.walk {
    border-radius: 30px 0 0 0 ;
}
.kcal {
    border-radius: 0 30px 0 0 ;
}
.time {
    border-radius: 0 0 0 30px;
}
.long {
    border-radius: 0 0 30px 0 ;
}

.walkclose {
    cursor: pointer;
    border : none;
    background: #02311e;
    color: white;
    font-size: 30px;
    border-radius: 20px;
    padding: 0.8vh 4vh;
    margin: 1.2vh;
}
.walkclose:hover {
    background-color: rgba(182, 10, 10, 0.63);
    font-weight: bold;
    transform: scale(1, 1);
    transition: all 0.3s
}
</style>