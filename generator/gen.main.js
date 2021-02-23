/*
    #   @Property   EAX Romania, all rights reserved
    #   @CopyRight  Copyright (c) 2021 EAX Romania
    #   @Author     Alexandru B.
    #   @GitHub     https://github.com/eaxro
    #   @LinkedIN   https://linkedin.com/in/eaxro
    #   @FreeLancer https://www.freelancer.com/u/eaxro
    #   @WebSite    https://code.eax.ro
    #   @Version    v1.0
*/
var jEax = {
    eCNT:{
        pEaxList:{},
        pEaxPattern:{}
    },
    eED:{},
    pK:0,
    jTitle:{},
    jList:{},
    jPattern:{},
    jPrint:{},
    jData:"",
    get aList(){
        var ID = 0;
        for (i = 0; i < 999; i++) {
            if(typeof jEax.eCNT.pEaxList[i] == "undefined"){
                jEax.eCNT.pEaxList[i] = true;
                ID = i;
                break;
            }
        }
        jEax.eED.pEaxBTNDel = jEax.cElm("button");
        jEax.eED.pEaxBTNDel.id="del";
        jEax.eED.pEaxBTNDel.setAttribute("eax",ID);
        jEax.eED.pEaxBTNDel.onclick = function(y){
            jEax.gDoc("#List"+y.srcElement.getAttribute("eax")).remove();
            delete jEax.eCNT.pEaxList[y.srcElement.getAttribute("eax")];
        };
        jEax.eED.pEaxBTNDel.innerHTML = '<i class="fas fa-times"></i>';
        

        jEax.eED.pEaxTitle = jEax.cElm("b");
        jEax.eED.pEaxTitle.innerHTML = "# &lt;pEAX-"+ID+"&gt;";
        jEax.eED.pEaxList = jEax.cElm("textarea");
        jEax.eED.pEaxList.className = "pEaxList";
        jEax.eED.pEaxList.setAttribute("eax",ID);

        jEax.eED.pEaxDiv = jEax.cElm("div");
        jEax.eED.pEaxDiv.id = "List"+ID;
        jEax.eED.pEaxDiv.className = "DvList";
        jEax.eED.pEaxDiv.setAttribute("eax",ID);

        jEax.gDoc("#pEaxList").appendChild(jEax.eED.pEaxDiv);
        jEax.gDoc("#List"+ID).appendChild(jEax.eED.pEaxTitle);
        jEax.gDoc("#List"+ID).appendChild(jEax.eED.pEaxBTNDel);
        jEax.gDoc("#List"+ID).appendChild(jEax.eED.pEaxList);
    },
    get aPattern(){
        var ID = 0;
        for (i = 0; i < 999; i++) {
            if(typeof jEax.eCNT.pEaxPattern[i] == "undefined"){
                jEax.eCNT.pEaxPattern[i] = true;
                ID = i;
                break;
            }
        }

        jEax.eED.pEaxBTNDel = jEax.cElm("button");
        jEax.eED.pEaxBTNDel.id="del";
        jEax.eED.pEaxBTNDel.setAttribute("eax",ID);
        jEax.eED.pEaxBTNDel.onclick = function(y){
            jEax.gDoc("#Pattern"+y.srcElement.getAttribute("eax")).remove();
            delete jEax.eCNT.pEaxPattern[y.srcElement.getAttribute("eax")];
        };
        jEax.eED.pEaxBTNDel.innerHTML = '<i class="fas fa-times"></i>';
    
        jEax.eED.pEaxTitle = jEax.cElm("b");
        jEax.eED.pEaxTitle.innerHTML = "# EAX Pattern "+ID;
        jEax.eED.pEaxPattern = jEax.cElm("textarea");
        jEax.eED.pEaxPattern.className = "pEaxPattern";
        jEax.eED.pEaxPattern.setAttribute("eax",ID);
        jEax.eED.pEaxDiv = jEax.cElm("div");
        jEax.eED.pEaxDiv.id = "Pattern"+ID;
        jEax.eED.pEaxDiv.className = "DvPattern";
        jEax.eED.pEaxDiv.setAttribute("eax",ID);

        jEax.gDoc("#pEaxPattern").appendChild(jEax.eED.pEaxDiv);
        jEax.gDoc("#Pattern"+ID).appendChild(jEax.eED.pEaxTitle);
        jEax.gDoc("#Pattern"+ID).appendChild(jEax.eED.pEaxBTNDel);
        jEax.gDoc("#Pattern"+ID).appendChild(jEax.eED.pEaxPattern);
    },
    get Load(){
    },
    cElm:function(cName){ return document.createElement(cName); },
    gDoc:function(gDocNa,eDT = {}){
        eDT.Doc = document;
        eDT.Matched = gDocNa.match(/(\.|\#|=| )?(.*)/);
        switch (eDT.Matched[1]) {
            case "#":
                eDT.Doc = document.getElementById(eDT.Matched[2]);
                break;
            case "=":
                eDT.Doc = document.getElementsByName(eDT.Matched[2]);
                break;
            case " ":
                eDT.Doc = document.getElementsByName(eDT.Matched[2]);
                break;
            case ".":
                eDT.Doc = document.getElementsByClassName(eDT.Matched[2]);
                break;
            default:
                eDT.Doc = document.getElementsByTagName(eDT.Matched[2]);
        }
        return eDT.Doc;
    },
    gCoock:function(cName,eDT = {}){
        eDT.cName = cName+"=";
        eDT.cData = document.cookie.split(';');
        for(var i = 0; i < eDT.cData.length; i++) {
            eDT.DATA = eDT.cData[i];
            while (eDT.DATA.charAt(0)==' ') { eDT.DATA = eDT.DATA.substring(1); }
            if (eDT.DATA.indexOf(eDT.cName) == 0) { return eDT.DATA.substring(eDT.cName.length, eDT.DATA.length); }
        }
        return false;
    },
    sCoock:function(cName,cValue,cExp = 32140800000,cPath = "/",eDT = {}){
        eDT.DATA = jEax.date;
        eDT.DATA.setTime(eDT.DATA.getTime()+cExp);
        document.cookie = cName+"="+cValue+";expires="+eDT.DATA.toUTCString()+";path="+cPath;
        return cValue;
    },
    get eStart(){
        jEax.aList;
        jEax.aPattern;
        jEax.gDoc("#pEaxListBTN").onclick = function(){
            jEax.aList;
        };
        jEax.gDoc("#pEaxPatternBTN").onclick = function(){
            jEax.aPattern;
        };
        jEax.gDoc("#pEaxRunBTN").onclick = function(){
            jEax.jList = {};
            jEax.jPattern = {};
            jEax.jPrint = {};
            jEax.jTitle = {};
            var EaxID = 0; 
            for (var k of Object.keys(jEax.gDoc(".pEaxList"))){
                
                jEax.jList[jEax.gDoc(".pEaxList")[k].getAttribute("eax")] = JSON.parse("["+jEax.gDoc(".pEaxList")[k].value.replace(/(?:\r\n|\r|\n)/g, '/r/n/eax')+"]");
                EaxID = jEax.gDoc(".pEaxList")[k].getAttribute("eax");
            }
            for (var y of Object.keys(jEax.gDoc(".pEaxPattern"))){
                jEax.jPattern[jEax.gDoc(".pEaxPattern")[y].getAttribute("eax")] = JSON.parse("["+jEax.gDoc(".pEaxPattern")[y].value.replace(/(?:\r\n|\r|\n)/g, '/r/n/eax')+"]");
                
                jEax.jPrint[y] = [];
            }
            jEax.jTitle = JSON.parse("["+jEax.gDoc(".pEaxTitle")[0].value+"]");

            /* # First Row List */
            for (var k of Object.keys(jEax.jList[EaxID])){
                jEax.pK=k;
            /* # Second Row List */
                for (var y of Object.keys(jEax.jPattern)){
            /* # Third Row List */
                    for (var z of Object.keys(jEax.jPattern[y])){
                        if(jEax.jPattern[y][z]!=""){
                            jEax.jPrint[y].push(jEax.jPattern[y][z].replace(/<pEAX-([0-9]+)>/gi, function (x,y) {
                                return (typeof jEax.jList[y] == "undefined") ? "{NoList-"+jEax.pK+"}" : jEax.jList[y][jEax.pK]; 
                            })+"\n");
                        }
                    }
                }
            }
            jEax.jData = "";
            for (var x of Object.keys(jEax.jPrint)){
                if(jEax.jPrint[x].length!=0){
                    if(typeof jEax.jTitle[x] != "undefined"){
                        jEax.jData += jEax.jTitle[x]+"\n";
                    }
                    for (var y of Object.keys(jEax.jPrint[x])){
                        jEax.jData += jEax.jPrint[x][y].replace(/\/r\/n\/eax/g, '\n');
                    }
                    jEax.jData += "\n";
                }
            }
            jEax.gDoc("#pEaxData").value = jEax.jData;
        };
    }
};