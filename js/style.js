$(document).ready(function(){ 
   var allimg=["i-4.png","f-4d.png","f-4b.png","f-4e.png","f-4a.png","f-4c.png","h-4.png","a-5.png","g-4.png","icon.png","j-4.png","b-4.jpg","a-6.jpg","c-9.jpg","j-5.jpg"];
   var url="upload/";
   var num=allimg.length;
   var images ={};
   var count=0;
   loadings();
   function loadings(){
      for (var i =0;i<num;i++) {
         images[i] = new Image();
         images[i].src=url+allimg[i];
         images[i].onload = function(){
            count++
            if(count==num){
               $(".pats").css("stroke-dashoffset",0);
               setTimeout(function(){
                  $(".loading").hide();
                  $(".swiper-container").show();
                  $(".show").show();
                  int();
               },800);

            }else{
               $(".pats").css("stroke-dashoffset",(300*(1-count/num)+900));
            }
         }
      }
   }

   //招聘信息
   var directors={
      '1.超声科主任':"副高及以上职称，本科以上学历；10年以上三甲医院超声科工作经验，3年以上科室管理经验。",
      '2.康复科主任':"副高及以上职称，本科以上学历；10年以上三甲医院康复科工作经验，3年以上科室管理经验。",
      '3.妇科科主任/学科带头人':"副高及以上职称；10年以上三级医院妇科临床工作经验；掌握常见妇产科疾病的诊断治疗，熟练开展常规手术，对本专业的疑难、危重病例和突发急症病人有熟练的处理经验，擅长腔镜者优先，能独立开展四级开腹手术。",

      '4.泌尿外科主任':"副高以上职称，10年以上三级医院工作经验，其中3年以上科室管理工作经验。",
      '5.神经外科主任':"副高以上职称，10年以上三甲医院神经外科临床工作经验，有学科带头人或科室管理工作经验者优先，开颅手术+介入者优先。",
      '6.口腔科副主任':"副高及以上职称，本科以上学历；10年以上口腔科工作经验，3年以上科室管理经验。",
      '7.皮肤科主任':"副高及以上职称，本科以上学历；10年以上皮肤科工作经验，3年以上科室管理经验。",
      '8.推拿科主任':"副高及以上职称，本科以上学历；10年以上三甲医院推拿科工作经验，3年以上科室管理经验。",
      '9.针灸科主任':"副高及以上职称，本科以上学历；10年以上三甲医院针灸科工作经验，3年以上科室管理经验。",
      '10.神经内科中医学科带头人':"中医副高以上职称，本科以上学历；10年以上三甲教学医院神经内科临床工作经验，对本专业的疑难、危重病人有丰富的处理经验，有学科带头人工作经验者优先。"
   }
   var backbones={
      '1.心血管内科医师（介入）':"副高以上职称；长期从事心血管专业或近十年从事心内科专业，具有5年以上三甲医院工作经历，有冠脉或起搏电生理介入资质。",
      '2.肿瘤科医师':"中医/西医专业，硕士研究生学历，有执业医师资格证，已完成住院医师规范化培训。初中级职称均可。",
      '3.肿瘤科课题研究员':"硕士研究生学历，负责肿瘤科中西医及绿色综合治疗的相关课题、论文工作；相关课题的设计、申报、撰写及论文（包括职称论文）的发表工作。",
      '4.神经外科医师':"本科以上学历，3年以上神经外科临床经验。各级职称均可，副高以上职称者需具有10年以上三甲医院神经外科临床工作经验。",
      '5.心胸外科医师':"本科以上学历，初中级职称均可，5年以上三级医院心胸外科临床工作经验，对各种本专业疾病有丰富的诊断与治疗经验，能协助上级医生科主任开展相关手术。",
      '6.普外科医师':"本科及以上学历，中级职称，5年以上三级以上医院普外科工作经验。",
      '7.新生儿科医师':"本科及以上学历，临床医学专业，各级职称均可；3年以上三级医院新生儿方面经验。",
      '8.儿内科医师':"本科及以上学历，临床医学专业，各级职称均可；3年以上三甲医院儿科临床工作经验，掌握儿内科疾病诊疗常规。",
      '9.小儿外科医师':"本科及以上学历，完成规范化培训，临床工作年限三年以上。",
      '10.产科医师':"本科及以上学历，临床医学专业；熟练掌握产科等相关专业基础理论和治疗技术。",
      '11.皮肤科医师':"本科以上学历，临床医学专业，初中级职称均可。",
      '12.急诊科医师':"本科以上学历，各级职称均可，有3年以上急诊科工作经验，尤其对急救方面知识熟悉。副高以上职称者需具有10年以上三甲医院急诊科工作经验；对急诊病例有丰富的诊断与治疗经验。",
      '13.超声科医师':"大专及以上学历，初级以上职称，有医师执业证，且有3年以上超声科工作经验，能独立完成超声科诊断工作。 ",
      '14.脑电图医师':"本科及以上学历，初中级职称均可，有3年以上脑电图、TCD等工作经验，能独立完成脑电图检查。",
      '15.麻醉科医师':"本科及以上学历，初中级职称均可，有三甲医院麻醉科工作经验优先。",
      '16.推拿科医师':"本科及以上学历，初级以上职称，有3-5年推拿科病房工作经验，能够独立管床，有三甲医院工作经验优先。",
      '17.康复科医师':"本科及以上学历，初级以上职称，有三甲医院康复科工作经验优先",
      '18.神志病科医师':"本科及以上学历，初级以上职称，有3年以上神志病科或精神科等工作经验。",
      '19.心电图医师':"大专及以上学历；二甲以上医院心电图相关工作经验；有执业医师证。",
      '21.口腔科医师（正畸、修复、种植）':"本科及以上学历；3年以上二级医院口腔全科工作经验；熟练掌握口腔各种疾病诊断和治疗。",
      '22.病案室主治医师':"本科以上学历，中级以上职称，5年以上三级医院工作经验；有过病案室的工作经验，中医或西医专业。",
      '23.放疗科医师':"大专及以上学历、医师资格证、放疗医师上岗证；熟悉最新设备的使用，掌握相关放射物理学知识和放疗技术操作。",
      '24.放疗科技师':"大专以上学历，5年以上相关岗位工作经验；持直线加速器上岗证。"
   }
   var nurses={
      '1.主管护师':"大专学历及以上，40岁以下，具有二级以上医院5年以上临床专科护理工作经验。",
      '2.护士/护师':"大专学历及以上，35岁以下，具有二级以上医院2年以上临床专科护理工作经验。"
   }
   var others={
      '1.医院后勤 /总务科长':"1.大专以上学历；有从事医院后勤、工程、总务工作经验优先考虑；2.持物业管理职业资格证优先考虑。",
      '2.医保办主任':"1、6年以上医保工作经验，熟悉广州医保（包括职工医保和居民医保）政策与法律法规，熟悉医保操作流程，懂医保结算。有病种分值付费工作经验者优先。",
      '3.会计副主管':"1、本科及以上学历；具备中级会计师职称；2、5年大中型企业工作经验，3年及以上主管会计工作经验，有医院工作经验、审计工作经验优先；3、对信息系统有风控经验，熟练操作EXCEL功能，具备一定抗压能力。",
      '4.工程领班':"1.具备三年相关工作经验、能判断和处理突发事件、有一定的组织能力；2、持相关资格证件。",
      '5.消防组长':"1.2年以上高层建筑消防工作经验，熟悉消防自助系统的操作及各种灭火器材的运用；2.具备丰富的消防安全知识及扎实的组织培训能力；3.身体健康，无不良记录，退伍军人、消防、武警，或有带兵经验者优先录用。"
      }
   var outsides={
      '1.月子中心儿科医师':"大专以上学历，儿科工作经历，持有医师执业证，可变更；形象好，有较好的沟通能力以及服务意识。",
      '2.月子中心产科医师':"大专以上学历，妇产科工作经历，持有医师执业证，可变更；形象好，有较好的沟通能力以及服务意识。",
      '3.肇庆诊所医师':"大专以上学历，有医师执业证和资格证，执业范围是内科，可办理变更手续。中级以上职称。",
      '4.佛山南海半岛中医诊所医师':"大专及以上学历，具有主治中医及以上职称，有相关证书（资格证、执业证、职称证），可变更注册。",
      '5.采购主任':"1.大专以上学历，35-45岁；7年以上工作经验，有采购、药品、文秘、护理等管理工作经历均可。2.主要负责医疗耗材，检验试剂、口腔材料采购、拟定合同、管理日常事务、其他跟进工作。"
   }
      
   function int(){
      var htmls_director="";
      for( var key in directors ){
         htmls_director=htmls_director+"<p>"+key+"</p>";
      }
      var htmls_backbone="";
      for( var key2 in backbones ){
         htmls_backbone=htmls_backbone+"<p>"+key2+"</p>";
      }
      var htmls_nurse="";
      for( var key3 in nurses ){
         htmls_nurse=htmls_nurse+"<p>"+key3+"</p>";
      } 
      var htmls_other="";
      for( var key4 in others ){
         htmls_other=htmls_other+"<p>"+key4+"</p>";
      }
      var htmls_outside="";
      for( var key5 in outsides ){
         htmls_outside=htmls_outside+"<p>"+key5+"</p>";
      }
      $('.fourth_list dl').eq(0).children('dd').html(htmls_director);
      $('.fourth_list dl').eq(1).children('dd').html(htmls_backbone);
      $('.fourth_list dl').eq(2).children('dd').html(htmls_nurse);
      $('.fourth_list dl').eq(3).children('dd').html(htmls_other);
      $('.fourth_list dl').eq(4).children('dd').html(htmls_outside);
      
      var shows_befor="<div class='blue_m'><img src='upload/d-5.png'></div> <div class='back'><img src='upload/f-1.png'></div>   <div class='showname'>"
      var shows_center="</div><div class='showlist'><ul class='swiper-wrapper'>"
      var shows_after="</ul><div class='lefts'></div><div class='rights'></div></div><div class='yellow_m'><img src='upload/f-0.png'></div>"
      var ul_director="",ul_backbone="",ul_nurse="",ul_other="",ul_outside="";
      for( var dkey in directors ){
         ul_director=ul_director+"<li class='swiper-slide'><h6>"+dkey+"</h6><p>"+directors[dkey]+"</p></li>";
      }
      $('.director').html((shows_befor+""+shows_center+ul_director+shows_after));
      for( var bkey in backbones ){
         ul_backbone=ul_backbone+"<li class='swiper-slide'><h6>"+bkey+"</h6><p>"+backbones[bkey]+"</p></li>";
      }
      $('.backbone').html((shows_befor+""+shows_center+ul_backbone+shows_after));

      for( var nkey in nurses ){
         ul_nurse=ul_nurse+"<li class='swiper-slide'><h6>"+nkey+"</h6><p>"+nurses[nkey]+"</p></li>";
      }
      $('.nurse').html((shows_befor+""+shows_center+ul_nurse+shows_after));
      
      for( var okey in others ){
         ul_other=ul_other+"<li class='swiper-slide'><h6>"+okey+"</h6><p>"+others[okey]+"</p></li>";
      }
      $('.other').html((shows_befor+""+shows_center+ul_other+shows_after));
      for( var oskey in outsides ){
         ul_outside=ul_outside+"<li class='swiper-slide'><h6>"+oskey+"</h6><p>"+outsides[oskey]+"</p></li>";
      }
      $('.outside').html((shows_befor+""+shows_center+ul_outside+shows_after));


      var director_swiper= new Swiper ('.director .showlist', {  
         nextButton: '.rights',
         prevButton: '.lefts',
      })
      var backbone_swiper=new Swiper ('.backbone .showlist', {  
         nextButton: '.rights',
         prevButton: '.lefts',
      })
      var nurse_swiper=new Swiper ('.nurse .showlist', {  
         nextButton: '.rights',
         prevButton: '.lefts',
      })
      var other_swiper=new Swiper ('.other .showlist', {  
         nextButton: '.rights',
         prevButton: '.lefts',
      })
      var outside_swiper=new Swiper ('.outside .showlist', {  
         nextButton: '.rights',
         prevButton: '.lefts',
      })
      var mySwiper = new Swiper ('.swiper-container', {
         direction : 'vertical',
         mousewheelControl : true,
         onInit: function(swiper){
         swiperAnimateCache(swiper);
         swiperAnimate(swiper);
           },
         onSlideChangeEnd: function(swiper){
         swiperAnimate(swiper);
          }   
      })
      var startScroll, touchStart, touchCurrent;
         mySwiper.slides.on('touchstart', function (e) {
            startScroll = this.scrollTop;
            touchStart = e.targetTouches[0].pageY;
         }, true);
         mySwiper.slides.on('touchmove', function (e) {
            touchCurrent = e.targetTouches[0].pageY;
            var touchesDiff = touchCurrent - touchStart;
            var slide = this;
            var onlyScrolling =
               ( slide.scrollHeight > slide.offsetHeight ) &&
                  (
                     ( touchesDiff < 0 && startScroll === 0 ) || 
                          ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) || 
                          ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) ) 
                      );
              if (onlyScrolling) {
                  e.stopPropagation();
              }
          }, true);
      var changename=$(".fourth_list dl.on").attr("data-name");
      var texts=$(".fourth_list dl.on dt").text();
      $(".fourth_list dl dt").on("click",function(){
         if(!($(this).parent('dl').hasClass("on"))){
            $(this).parent('dl').addClass("on");
            $(this).parent('dl').siblings().removeClass("on");
            texts=$(this).text();
            changename= $(this).parent('dl').attr("data-name");
            console.log(changename);
         }else{
            $(this).parent('dl').removeClass("on");
         }
      });
      $(".fourth_list dl dd p").on("click",function(){
         var num=$(this).index();
         $('.'+changename).children(".showname").html(texts);
         $('.'+changename).css("z-index","5");
        
         mySwiper.lockSwipes();
         if(changename=="director"){
            director_swiper.slideTo(num, 10, false);

         }else if(changename=="backbone"){
            console.log(num);
            backbone_swiper.slideTo(num, 10, false);

         }else if(changename=="nurse"){
            
            nurse_swiper.slideTo(num, 10, false);

         }else if(changename=="outside"){
            outside_swiper.slideTo(num, 10, false);

         }else{
            other_swiper.slideTo(num, 10, false);

         }

      });
      $(".back").on("click",function(){
        // mySwiper.lockSwipes();
        $('.'+changename).css("z-index","0");
         mySwiper.unlockSwipes();
      })

   }
     
  //音乐播放
   var firstTouch = true;
      $('body').bind("click",function(e){
         if ( firstTouch ) {
         firstTouch = false;
         document.getElementById('bgm').play();
         }else{
            return;
         }
     });

      $(".bgm-btn").bind("click",function(e){  
         var dom = document.getElementById('bgm');
         if( dom.paused ){
            dom.play();
            $(".bgm-btn").removeClass("mut");
         }else{
            dom.pause();
            $(".bgm-btn").addClass("mut");
      }
   });
});
