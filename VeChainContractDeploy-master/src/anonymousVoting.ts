import { thorifyWeb3 } from "./thorifyWeb3";
import fs = require('fs');
import path = require('path');
import { origin } from "../config"
const ThorifyWeb3 = thorifyWeb3();
const web3 = ThorifyWeb3.thorifyAdaptor("http://localhost:8669")
import { thorify } from "thorify";
import { callbackify } from "util";

async function ran() {
    var anonymousVoting = new web3.eth.Contract(origin.anonymousVotingABI, origin.anonymousVotingAdd)
    web3.eth.accounts.wallet.add({
        privateKey: "0xdce1443bd2ef0c2631adc1c67e5c93f13dc23a41c18b536effbbdcbcdb96fb65",
        address: "0x7567d83b7b8d80addcb281a71d54fc7b3364ffed"
    })

    web3.eth.accounts.wallet.add({
        privateKey: "0x321d6443bc6177273b5abf54210fe806d451d6b7973bccc2384ef78bbcd0bf51",
        address: "0xd3ae78222beadb038203be21ed5ce7c9b1bff602"
    })

    web3.eth.accounts.wallet.add({
        privateKey: "0x2d7c882bad2a01105e36dda3646693bc1aaaa45b0ed63fb0ce23c060294f3af2",
        address: "0x733b7269443c70de16bbf9b0615307884bcc5636"
    })

    // add white list
    // anonymousVoting.methods.setEligible(["0x7567d83b7b8d80addcb281a71d54fc7b3364ffed",
    //     "0xd3ae78222beadb038203be21ed5ce7c9b1bff602",
    //     "0x733b7269443c70de16bbf9b0615307884bcc5636",
    //     "0x115eabb4f62973d0dba138ab7df5c0375ec87256",
    //     "0x199b836d8a57365baccd4f371c1fabb7be77d389"])
    //     .send({ from: "0x7567d83b7b8d80addcb281a71d54fc7b3364ffed" })
    //     .then(function (result: any) {
    //         console.log("Result of setEligible: ", result)
    //     })

    // anonymousVoting.methods.getEligible().send({from: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed'})
    //         .then(function(result: any){
    //             console.log('result of eligible', result)
    //         })

    // anonymousVoting.methods.get5thEligible().call(function(error: any, result: any){
    //     if (!error) {
    //         console.log('call Result: ' + result);
    //     }
    //     else console.log('error: ', error);
    // })

    // anonymousVoting.methods.setEligible(["0x7567d83b7b8d80addcb281a71d54fc7b3364ffed",
    // "0xd3ae78222beadb038203be21ed5ce7c9b1bff602",
    // "0x733b7269443c70de16bbf9b0615307884bcc5636",
    // "0x115eabb4f62973d0dba138ab7df5c0375ec87256",
    // "0x199b836d8a57365baccd4f371c1fabb7be77d389"]).call({from: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed'}).then(function(result: any){
    //         console.log('call result: ' + result);
    // })

    // make sure white list added
    // anonymousVoting.methods.getEligible().call({from: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed'}).then(function(result: any) {
    //     console.log('call result: ' + result);
    // })

    // setup
    // anonymousVoting.methods.beginSignUp("test", true, 1000, 2000, 3000, 4000, 5000, 100)
    // .send({from: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed', value: 100})
    // .then(function(result: any, error: any){
    //     if (!error) {
    //         console.log('begin sign up result: ' + result);
    //     }
    //     else console.log(error);
    // })

    // make sure the success of setup phase
    // anonymousVoting.methods.getQuestion().call({from: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed'})
    // .then(function(result: any){
    //     console.log('call result: ' + result);
    // })

    // #0 register
    // anonymousVoting.methods.register(["27014530906007957169531703425481274912103442539779119437726046076907210423569", "70052204206988426097199854494650803460514936258189950471015657998938191627469"], ["3414570185207774988195907254638111010663682235814498718978778746795753512785", "110308138054162063872434202072244781559310362415331225986456498158446496177588", "1"], "76795635587101492173803622389620504997884479887563478360641024434704771410964")
    // .send({from: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed', value: 100})
    // .then(function(result: any, error: any){
    //     if (!error) {
    //         console.log('call result: ' + result);
    //     } else console.log(error);
    // })

    // #1 register
    // anonymousVoting.methods.register(["11841251688039534113011606117454703477082488004148077370632699626974787119588", "79763949622447667494288191404109174631830984986760713655368681866689760702402"], ["39639688100391838697915618468219718128439006833158947952885703457096191227999", "112250423969109195481165166511306661719910390070305702836340395884646125523022", "1"], "102751194118811359984956286767954340316051071682363405218041133558903535142739")
    // .send({from: '0xd3ae78222beadb038203be21ed5ce7c9b1bff602', value: 100})
    // .then(function(result: any, error: any){
    //     if (!error) {
    //         console.log('call result: ' + result);
    //     } else console.log(error);
    // })

    // #2 register
    // anonymousVoting.methods.register(["25265780503991000108624184909730437826199504144243062604090751243398103591587", "36141139113067829122111260270312542096855331425749928884890506365184570391103"], ["53670262187457307617624849561662060245333316081131366218305092743985755907425", "37546986764084216406585349756136580715393696733790957813684724392755579321083", "1"], "64986997868927737179255337465621609341097934508954900718852758632982073431589")
    // .send({from: '0x733b7269443c70de16bbf9b0615307884bcc5636', value: 100})
    // .then(function(result: any, error: any){
    //     if (!error) {
    //         console.log('send result: ' + result);
    //     } else console.log(error);
    // })

    // check voter information
    // anonymousVoting.methods.getVoter()
    // .call({from: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed'})
    // .then(function(result: any) {
    //     console.log('call result: ' + result[1]);
    // })

    // finish registration, calculate reconstruction key
    // anonymousVoting.methods.finishRegistrationPhase()
    // .send({from: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed'})
    // .then(function(result: any) {
    //     console.log('call result: ' + result);
    // })

    // hand in commitment
    // anonymousVoting.methods.submitCommitment("0xf4133002e12e82bf0d7113a9e27951644336310931df27ec1da236add32b88e1")
    // .send({from: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed'})
    // .then(function(result: any) {
    //     console.log('call result: ' + result);
    // })

    // anonymousVoting.methods.submitCommitment("0xd5139bcf8942b125713f7bfc1d71425ef64eddaf8cb6acb32cecffb2e9477ad3")
    // .send({from: '0xd3ae78222beadb038203be21ed5ce7c9b1bff602'})
    // .then(function(result: any) {
    //     console.log('call result: ' + result);
    // })

    // anonymousVoting.methods.submitCommitment("0x454b862a34406e34b820b7c3d4a36389ac5751cd2ffe08252f16c5b9f1a72a45")
    // .send({from: '0x733b7269443c70de16bbf9b0615307884bcc5636'})
    // .then(function(result: any) {
    //     console.log('call result: ' + result);
    // })

    // submit vote
    // anonymousVoting.methods.submitVote(["901",
    //     "5786353877125305165823753114757630645427172469876510091059279336280350742747",
    //     "643",
    //     "58253608940113604300813067428788076120036413988033316279110251858270387263902"],
    //     ["99685563589891123961801040056016975535590815905001603006473797644388807261892",
    //         "69415431395732364840737933524855235766340332712245234897245885159417509107362"],
    //     ["56969865635423094574218167248059034334028418910337377374221005364615737939310",
    //         "28558104182841803460679520934736235832201504258804088623113259554456054556406"],
    //     ["10714370496554758679127422253582132679742271239927355452527005314213782064287",
    //         "42437002885404814759102276642901429827134765985429144418648506818882990538655"],
    //     ["18752372355191540835222161239240920883340654532661984440989362140194381601434",
    //         "88478450163343634110113046083156231725329016889379853417393465962619872936244"],
    //     ["21290149514223507304285367853734477475984415570511615343827511999924882406742",
    //         "20858123846822729862816987736746766192076598696771643681642258474711930485978"])
    //     .send({ from: "0x7567d83b7b8d80addcb281a71d54fc7b3364ffed" })
    //     .then(function (result: any, error: any) {
    //         if (!error) console.log("call result: " + result);
    //         else console.log('error', error);
    //     })

    // anonymousVoting.methods.submitVote(["44781996996370124177709300234404251696112655492831921872987146460690308623275",
    //     "10086",
    //     "103363587825406903152502849864746504294607128100531311332926795027708137763084",
    //     "10016"],
    //     ["83125605733441449328274153939286776657098355091400620860745074316344870680472",
    //         "40916689281126582356125534730802541108325847878626150181939018219669161859113"],
    //     ["80876711122405872631125275405512037251712608445114375057832893509158150470341",
    //         "2782990069636819502560501425703132099784022991977343499160429251322554002137"],
    //     ["97416875919795273125272982972188608348998042910992374487921190084600455349072",
    //         "84325888083380389542069722597119481983580525568330274596291043171502541889118"],
    //     ["61660917162301571425399993196401292809202199160688969654966947208241112877992",
    //         "17003510548933456690108023606385656583850597878968527314994282671878697459470"],
    //     ["99720363052847762533167091623586019567499251876982412023446877686006282447260",
    //         "92413260273832898473449978654692458583239616171954230665695615410377745609851"])
    //     .send({ from: "0xd3ae78222beadb038203be21ed5ce7c9b1bff602" })
    //     .then(function (result: any, error: any) {
    //         if (!error) console.log("call result: " + result);
    //         else console.log('error', error);
    //     })

    // anonymousVoting.methods.submitVote(["12580",
    //     "28518735531322885515560802134354285529222666196348727329665143778858188677263",
    //     "12315",
    //     "43018424732175749790105138273350958920787444418041308784073932432224402253912"],
    //     ["110851049233871090227107507636180542430915726996243490456414410277311548106408",
    //         "83177923959380610408645393327982518582211426988193214648077910198429815262465"],
    //     ["39846330291394520315299879616141952512415554666155497922742702874089525807882",
    //         "48061176260406973324452772045064414464068099464139169194894297542402024500855"],
    //     ["48895847046307580999982932599400740389797367285738429427924380928504263610799",
    //         "16942627774416659645383947267102813654052453803330695522760838739836131931818"],
    //     ["74512487766968653464611013308808189173733770230292564123442866775229745468002",
    //         "19630385051432225819094816552822702631688616732802423242419128873949553287084"],
    //     ["95101724560524753354310171023281251026795360472667173066724302226895689530578",
    //         "43678385081241867125871616767378428911218044264020145636041015822860740636629"])
    //     .send({ from: "0x733b7269443c70de16bbf9b0615307884bcc5636" })
    //     .then(function (result: any, error: any) {
    //         if (!error) console.log("call result: " + result);
    //         else console.log('error', error);
    //     })

    // compute tally
    // anonymousVoting.methods.computeTally()
    // .send({ from: "0x7567d83b7b8d80addcb281a71d54fc7b3364ffed" })
    // .then(function (result: any, error: any) {
    //     if (!error) console.log('call result: ' + result);
    //     else console.log('error', error);
    // })

    anonymousVoting.methods.getFinalTally()
        .call({ from: "0x7567d83b7b8d80addcb281a71d54fc7b3364ffed" })
        .then(function (result: any, error: any) {
            if (!error) console.log('final result: ' + result);
            else console.log('error', error);
        })
}

ran()

// web3.eth.getStorageAt(origin.anonymousVotingAdd, 11, 'latest').then(function(result:any){
//     console.log('position 6 variable: ', result)
// })
