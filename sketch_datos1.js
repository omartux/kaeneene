function setup() {
    var width = 200;
    var height = 150;

    var canvas = createCanvas(width, height);
    canvas.parent('sketch_holder');
    background(0, 51, 102);
    for (var x = 0; x < width; x += width / 10) {
        for (var y = 0; y < height; y += height / 5) {
            stroke(125, 125, 125);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }

    var point = [140, 90];//query

    let point1 = new N_Point([-22.4336662, -14.6770334]);
    let point2 = new N_Point([-22.3156162, -25.4248198]);
    let point3 = new N_Point([-28.715026, 16.7115424]);
    let point4 = new N_Point([-42.9961278, 17.1180376]);
    let point5 = new N_Point([-10.6510758, 12.952144]);
    let point6 = new N_Point([14.0795612, 56.9784186]);
    let point7 = new N_Point([-3.0824062, -27.8529532]);
    let point8 = new N_Point([40.735008, -24.2881732]);
    let point9 = new N_Point([-5.8480982, 44.5726248]);
    let point10 = new N_Point([-21.3401344, -23.2725064]);
    let point11 = new N_Point([12.2120832, 65.9630568]);
    let point12 = new N_Point([-7.098746, 25.5105432]);
    let point13 = new N_Point([11.9612396, 31.7845688]);
    let point14 = new N_Point([-35.4713544, -12.0973364]);
    let point15 = new N_Point([-34.582808, 20.4907472]);
    let point16 = new N_Point([7.6023262, 35.8842442]);
    let point17 = new N_Point([6.5059466, -15.060566]);
    let point18 = new N_Point([-3.9973536, 42.366478]);
    let point19 = new N_Point([10.2997002, -5.6250076]);
    let point20 = new N_Point([7.9147928, 27.519384]);
    let point21 = new N_Point([-9.722913, 38.103694]);
    let point22 = new N_Point([-13.3766222, 35.9615368]);
    let point23 = new N_Point([-20.784914, -2.333007]);
    let point24 = new N_Point([-22.315845, -22.6782168]);
    let point25 = new N_Point([-87.1310748, 7.9538722]);
    let point26 = new N_Point([-25.5354606, -14.8208656]);
    let point27 = new N_Point([-31.0356736, -17.6692162]);
    let point28 = new N_Point([-24.3290082, 1.6607098]);
    let point29 = new N_Point([50.1441584, 0.090615]);
    let point30 = new N_Point([-51.009254, -19.9923144]);
    let point31 = new N_Point([47.259244, -39.7696652]);
    let point32 = new N_Point([25.4674122, 3.1841652]);
    let point33 = new N_Point([9.4797996, -39.5979788]);
    let point34 = new N_Point([-97.139396, -15.1280488]);
    let point35 = new N_Point([-43.2541136, 10.2310112]);
    let point36 = new N_Point([3.5114182, -23.8789866]);
    let point37 = new N_Point([-13.3924322, 4.8410794]);
    let point38 = new N_Point([12.205852, 25.006873]);
    let point39 = new N_Point([-36.2612832, -12.9963506]);
    let point40 = new N_Point([7.0295272, -0.9809034]);
    let point41 = new N_Point([8.6369252, -9.89944]);
    let point42 = new N_Point([18.6504072, -13.253779]);
    let point43 = new N_Point([-16.1106304, -25.2563606]);
    let point44 = new N_Point([-63.6753776, -31.0726162]);
    let point45 = new N_Point([-24.1440744, 27.0652672]);
    let point46 = new N_Point([-0.7849632, -7.2151204]);
    let point47 = new N_Point([-23.8037774, -11.9520414]);
    let point48 = new N_Point([-42.3364116, -8.9657074]);
    let point49 = new N_Point([-102.5646808, -13.6718838]);
    let point50 = new N_Point([1.4083178, 8.2254582]);
    let point51 = new N_Point([-27.3744634, -24.386178]);
    let point52 = new N_Point([7.8790506, -20.618986]);
    let point53 = new N_Point([21.2770902, 34.157945]);
    let point54 = new N_Point([-2.553708, -18.6933034]);
    let point55 = new N_Point([-27.3079904, -13.7311172]);
    let point56 = new N_Point([-57.254284, -13.1886602]);
    let point57 = new N_Point([8.6964004, 1.9761836]);
    let point58 = new N_Point([20.6160822, 8.786879]);
    let point59 = new N_Point([-1.7732054, -13.2020652]);
    let point60 = new N_Point([24.0896736, 9.7695834]);
    let point61 = new N_Point([-22.2245488, -17.7764036]);
    let point62 = new N_Point([-43.5098446, -26.0626168]);
    let point63 = new N_Point([-17.4252942, -11.4417448]);
    let point64 = new N_Point([-30.8476962, -4.6591354]);
    let point65 = new N_Point([-27.7178062, -4.9186442]);
    let point66 = new N_Point([-27.702772, -18.0240174]);
    let point67 = new N_Point([-15.0151736, -11.087873]);
    let point68 = new N_Point([1.8096526, -33.1488292]);
    let point69 = new N_Point([-23.404252, 7.1602434]);
    let point70 = new N_Point([5.7210558, 1.193634]);
    let point71 = new N_Point([-15.3482722, -19.178707]);
    let point72 = new N_Point([-12.1908572, -24.4888854]);
    let point73 = new N_Point([-32.7292544, -2.2881472]);
    let point74 = new N_Point([-32.7308048, -3.0677832]);
    let point75 = new N_Point([-22.4304032, -12.0249558]);
    let point76 = new N_Point([-26.213169, -5.8068014]);
    let point77 = new N_Point([-2.5766972, -7.4256776]);
    let point78 = new N_Point([1.0271204, -22.6376514]);
    let point79 = new N_Point([-8.2707038, 60.5858418]);
    let point80 = new N_Point([19.9562426, -15.3242854]);
    let point81 = new N_Point([-2.8089172, -29.11453]);
    let point82 = new N_Point([4.5921072, 15.257745]);
    let point83 = new N_Point([-26.5030196, -11.09566]);
    let point84 = new N_Point([-4.4910476, -10.1886606]);
    let point85 = new N_Point([-10.4256048, -30.1883602]);
    let point86 = new N_Point([-16.383657, -32.1913528]);
    let point87 = new N_Point([-12.8042454, -4.5575732]);
    let point88 = new N_Point([19.9910454, -15.7968354]);
    let point89 = new N_Point([-21.4415662, 38.7873654]);
    let point90 = new N_Point([8.3873252, 8.9089536]);
    let point91 = new N_Point([-14.9227876, -23.5745634]);
    let point92 = new N_Point([20.454955, -19.7394278]);
    let point93 = new N_Point([-49.2474568, -17.5153006]);
    let point94 = new N_Point([-7.2806606, 20.6686918]);
    let point95 = new N_Point([17.6839064, -22.4900774]);
    let point96 = new N_Point([1.7663232, 55.6109544]);
    let point97 = new N_Point([-32.1509852, -12.5704008]);
    let point98 = new N_Point([30.9068062, -35.7448226]);
    let point99 = new N_Point([-31.429821, 17.8933852]);
    let point100 = new N_Point([62.9230572, -45.2773686]);
    let point101 = new N_Point([-25.0505904, -22.7074158]);
    let point102 = new N_Point([-10.8898782, -28.155362]);
    let point103 = new N_Point([-21.7426722, -16.666235]);
    let point104 = new N_Point([14.3029616, 8.8138662]);
    let point105 = new N_Point([17.7811484, 13.854711]);
    let point106 = new N_Point([29.2747216, -34.2550352]);
    let point107 = new N_Point([-21.5710666, -18.8785012]);
    let point108 = new N_Point([-5.4315198, -9.4114072]);
    let point109 = new N_Point([-16.4866668, 11.9334096]);
    let point110 = new N_Point([-22.628244, 6.3487696]);
    let point111 = new N_Point([-5.320466, -0.1802764]);
    let point112 = new N_Point([-41.542006, -31.020123]);
    let point113 = new N_Point([6.692863, -39.1667876]);
    let point114 = new N_Point([-18.9388316, -11.7552054]);
    let point115 = new N_Point([-20.6639864, 27.5252536]);
    let point116 = new N_Point([7.221946, 33.4761568]);
    let point117 = new N_Point([-36.845964, 21.809923]);
    let point118 = new N_Point([-1.755692, -27.6391264]);
    let point119 = new N_Point([-46.5563808, -30.1279918]);
    let point120 = new N_Point([-43.0454146, 5.395742]);
    let point121 = new N_Point([-16.9594478, 25.6394566]);
    let point122 = new N_Point([-43.3765156, -1.469092]);
    let point123 = new N_Point([20.7512336, 15.7651156]);
    let point124 = new N_Point([-28.4858434, 25.4325752]);
    let point125 = new N_Point([-45.1815134, -10.704073]);
    let point126 = new N_Point([-8.0427134, -22.6223126]);
    let point127 = new N_Point([-6.8428532, 0.4361546]);
    let point128 = new N_Point([-13.4923012, -13.907814]);
    let point129 = new N_Point([-30.9432174, -7.1469886]);
    let point130 = new N_Point([24.4320432, 19.2346568]);
    let point131 = new N_Point([-14.8337282, -0.1260678]);
    let point132 = new N_Point([-11.8145274, -28.6101378]);
    let point133 = new N_Point([-30.5080392, -15.9802654]);
    let point134 = new N_Point([29.5434242, -29.9703454]);
    let point135 = new N_Point([32.6046394, 51.4614538]);
    let point136 = new N_Point([7.6684816, 1.4030694]);
    let point137 = new N_Point([-51.9652048, 17.457797]);
    let point138 = new N_Point([28.6210696, 30.252492]);
    let point139 = new N_Point([-22.2151224, -16.4854642]);
    let point140 = new N_Point([-14.10269, -22.4498888]);
    let point141 = new N_Point([-25.2855646, -8.9662318]);
    let point142 = new N_Point([114.5431022, -44.874681]);
    let point143 = new N_Point([9.692158, -25.4246286]);
    let point144 = new N_Point([-18.7281428, -23.5220654]);
    let point145 = new N_Point([-16.63351, 7.809518]);
    let point146 = new N_Point([-20.1100286, -18.8004418]);
    let point147 = new N_Point([-37.7803078, -5.9811218]);
    let point148 = new N_Point([-27.4469272, -22.3762212]);
    let point149 = new N_Point([-2.8999964, -19.6357024]);
    let point150 = new N_Point([27.3008162, -18.4744178]);
    let point151 = new N_Point([-14.5951458, 43.6193386]);
    let point152 = new N_Point([87.02838, -51.8011856]);
    let point153 = new N_Point([37.3085254, 0.7941608]);
    let point154 = new N_Point([-16.1903968, -11.6894054]);
    let point155 = new N_Point([-22.9191726, 35.4641072]);
    let point156 = new N_Point([-20.983564, 5.0536454]);
    let point157 = new N_Point([-25.9012858, -10.1687214]);
    let point158 = new N_Point([-13.8653684, -26.8250194]);
    let point159 = new N_Point([-5.6698386, -14.3294278]);
    let point160 = new N_Point([-21.4998906, -9.6607814]);
    let point161 = new N_Point([21.1472986, -26.326405]);
    let point162 = new N_Point([13.1073068, 6.9222116]);
    let point163 = new N_Point([-6.3236812, -14.2230698]);
    let point164 = new N_Point([5.5721672, 40.49982]);
    let point165 = new N_Point([7.9273516, 9.928418]);
    let point166 = new N_Point([20.6106564, -28.6173032]);
    let point167 = new N_Point([-49.7797214, -15.0997108]);
    let point168 = new N_Point([-20.2358442, -21.6515408]);
    let point169 = new N_Point([-26.0219092, 21.90873]);
    let point170 = new N_Point([-1.0624082, -37.4019066]);
    let point171 = new N_Point([-8.4649334, 63.736538]);
    let point172 = new N_Point([19.7587356, -33.1194416]);
    let point173 = new N_Point([-13.4491486, -28.5829634]);
    let point174 = new N_Point([-12.0356884, 41.1838126]);
    let point175 = new N_Point([-2.8440626, -26.678909]);
    let point176 = new N_Point([19.8490592, 25.4497728]);
    let point177 = new N_Point([13.3479384, 20.481535]);
    let point178 = new N_Point([17.1025144, 28.0229594]);
    let point179 = new N_Point([73.2628726, -21.4131322]);
    let point180 = new N_Point([-32.5992418, -5.6493252]);
    let point181 = new N_Point([12.0349098, -5.6944518]);
    let point182 = new N_Point([-3.905067, -30.3377666]);
    let point183 = new N_Point([-21.973892, 36.9373528]);
    let point184 = new N_Point([21.0725598, -4.6369522]);
    let point185 = new N_Point([14.9408524, -29.36776]);
    let point186 = new N_Point([-10.569027, 51.8471586]);
    let point187 = new N_Point([3.1139782, -1.921895]);
    let point188 = new N_Point([-23.9506642, 22.269385]);
    let point189 = new N_Point([15.1409964, -17.807499]);
    let point190 = new N_Point([-15.5883618, -20.923292]);
    let point191 = new N_Point([-17.0081896, 12.9388726]);
    let point192 = new N_Point([14.8574998, -39.5907172]);
    let point193 = new N_Point([-18.2369672, -12.5119236]);
    let point194 = new N_Point([-4.7137434, -15.9443878]);
    let point195 = new N_Point([-27.1561768, 2.5812956]);
    let point196 = new N_Point([11.463992, -19.250816]);
    let point197 = new N_Point([0.4274526, -4.953175]);
    let point198 = new N_Point([-6.2707494, -19.1435866]);
    let point199 = new N_Point([-1.44046, -15.1329966]);
    let point200 = new N_Point([2.352067, 45.4125684]);
    let point201 = new N_Point([-2.3202732, 8.6334434]);
    let point202 = new N_Point([7.1694606, 27.3534756]);
    let point203 = new N_Point([-25.449395, -15.8398152]);
    let point204 = new N_Point([-22.2251444, 57.2195568]);
    let point205 = new N_Point([-31.5123834, -20.8151536]);
    let point206 = new N_Point([48.4453744, -34.5844146]);
    let point207 = new N_Point([-33.7541696, -7.5890954]);
    let point208 = new N_Point([-12.6270838, -17.1413446]);
    let point209 = new N_Point([-9.749633, -8.8283616]);
    let point210 = new N_Point([-35.5094348, -37.2237038]);
    let point211 = new N_Point([-9.866758, 19.8267176]);
    let point212 = new N_Point([-5.7484482, 48.1738992]);
    let point213 = new N_Point([32.889189, 27.0149926]);
    let point214 = new N_Point([-11.5103246, -24.324446]);
    let point215 = new N_Point([-62.7823032, -11.1631346]);
    let point216 = new N_Point([-27.248204, -9.436602]);
    let point217 = new N_Point([-13.8546166, 6.135606]);
    let point218 = new N_Point([-13.3306192, 15.5626164]);
    let point219 = new N_Point([-9.1716114, 7.8593334]);
    let point220 = new N_Point([-26.7517376, -18.9204358]);
    let point221 = new N_Point([-12.7130382, -8.940264]);
    let point222 = new N_Point([15.9730854, 34.5564072]);
    let point223 = new N_Point([-3.8328416, 54.2565186]);
    let point224 = new N_Point([30.25481, 39.061612]);
    let point225 = new N_Point([27.7557572, -10.3502376]);
    let point226 = new N_Point([-4.1145714, -8.5688114]);
    let point227 = new N_Point([-38.0380752, -20.239234]);
    let point228 = new N_Point([-19.3709416, -11.1205056]);
    let point229 = new N_Point([-23.7371022, -30.2854476]);
    let point230 = new N_Point([-12.7080982, -33.0009764]);
    let point231 = new N_Point([-1.1165168, -26.7022664]);
    let point232 = new N_Point([19.48579, -31.5503382]);
    let point233 = new N_Point([-20.9103908, -20.3356564]);
    let point234 = new N_Point([-2.3847186, -35.584306]);
    let point235 = new N_Point([33.9572566, -23.1890946]);
    let point236 = new N_Point([2.1009782, -27.0617004]);
    let point237 = new N_Point([-33.8777844, -19.694978]);
    let point238 = new N_Point([-11.6046984, -27.0315378]);
    let point239 = new N_Point([-13.0586612, -25.5945972]);
    let point240 = new N_Point([-12.33722, -17.0559394]);
    let point241 = new N_Point([-33.264448, -13.9830924]);
    let point242 = new N_Point([0.83526, -15.4969836]);
    let point243 = new N_Point([7.4859608, -12.0314828]);
    let point244 = new N_Point([5.1390514, -31.9705408]);
    let point245 = new N_Point([-14.402071, 10.3758664]);
    let point246 = new N_Point([23.357033, -33.8178446]);
    let point247 = new N_Point([-0.2679266, -10.8540804]);
    let point248 = new N_Point([-43.8695444, -0.3194624]);
    let point249 = new N_Point([-21.6226986, 47.1837296]);
    let point250 = new N_Point([-10.3358792, 22.7026352]);
    let point251 = new N_Point([13.9583098, -29.3673384]);
    let point252 = new N_Point([-44.409415, -10.1651442]);
    let point253 = new N_Point([14.7226096, -2.675111]);
    let point254 = new N_Point([10.1101784, -28.3168852]);
    let point255 = new N_Point([45.5889866, -34.837784]);
    let point256 = new N_Point([-9.8209748, -16.3370616]);
    let point257 = new N_Point([-13.3344532, -24.8020828]);
    let point258 = new N_Point([-44.7052376, -6.5215206]);
    let point259 = new N_Point([35.9027382, -30.4145276]);
    let point260 = new N_Point([-19.6658486, -20.4738268]);
    let point261 = new N_Point([10.5758086, -42.4269268]);
    let point262 = new N_Point([-16.3039078, -17.5007312]);
    let point263 = new N_Point([-95.641138, -16.5138302]);
    let point264 = new N_Point([33.1434336, -29.2023572]);
    let point265 = new N_Point([-70.5105686, -15.6260282]);
    let point266 = new N_Point([-7.7104668, 0.9896566]);
    let point267 = new N_Point([-22.3411404, -20.4909724]);
    let point268 = new N_Point([-25.8648576, 8.021653]);
    let point269 = new N_Point([-19.9066814, -4.9903402]);
    let point270 = new N_Point([22.7799188, 40.6365962]);
    let point271 = new N_Point([-12.6478388, 15.3464486]);
    let point272 = new N_Point([-42.0581258, -13.6827536]);
    let point273 = new N_Point([-3.1720626, 16.2272252]);
    let point274 = new N_Point([-15.9185546, -23.0633308]);
    let point275 = new N_Point([-1.8195322, -13.5763542]);
    let point276 = new N_Point([-18.0860182, -12.9694382]);
    let point277 = new N_Point([9.583034, -32.7853696]);
    let point278 = new N_Point([-11.2069624, -16.8257678]);
    let point279 = new N_Point([-33.4127172, -20.3945518]);
    let point280 = new N_Point([10.2704144, -37.5309852]);
    let point281 = new N_Point([-40.2254664, 33.6290876]);
    let point282 = new N_Point([-2.1738626, -27.3010594]);
    let point283 = new N_Point([-14.5461964, 30.801339]);
    let point284 = new N_Point([-11.5965414, -11.1677276]);
    let point285 = new N_Point([23.271061, 68.2965538]);
    let point286 = new N_Point([0.2009404, 35.5897524]);
    let point287 = new N_Point([-49.4981124, -9.414566]);
    let point288 = new N_Point([9.9226472, 6.4659412]);
    let point289 = new N_Point([-11.9767936, 8.3876604]);
    let point290 = new N_Point([-3.2814664, 37.3802786]);
    let point291 = new N_Point([-25.4447684, -23.841431]);
    let point292 = new N_Point([-41.8750918, -24.9264714]);
    let point293 = new N_Point([4.1782636, -35.333598]);
    let point294 = new N_Point([44.6406284, -9.1841268]);
    let point295 = new N_Point([24.1457384, -18.612094]);
    let point296 = new N_Point([-2.3669894, -25.3885996]);
    let point297 = new N_Point([-6.4753152, -25.6201044]);
    let point298 = new N_Point([-4.4929096, 48.9391972]);
    let point299 = new N_Point([-33.154302, 4.4363764]);
    let point300 = new N_Point([3.4718862, 21.9920564]);
    let point301 = new N_Point([-6.6430564, 11.620283]);
    let point302 = new N_Point([5.40729, 19.0042644]);
    let point303 = new N_Point([13.4684338, 36.927336]);
    let point304 = new N_Point([5.4313272, -16.3937302]);
    let point305 = new N_Point([-23.653731, -7.9807158]);
    let point306 = new N_Point([1.7427066, -32.0986446]);
    let point307 = new N_Point([48.076902, -50.9953662]);
    let point308 = new N_Point([69.7327402, -1.6692834]);
    let point309 = new N_Point([-24.1785614, 1.0748352]);
    let point310 = new N_Point([13.7617332, 73.295685]);
    let point311 = new N_Point([-4.214389, -26.072578]);
    let point312 = new N_Point([-0.5432262, 3.7158936]);
    let point313 = new N_Point([-6.570626, -3.897712]);
    let point314 = new N_Point([-99.1487154, -10.0224752]);
    let point315 = new N_Point([-0.6872992, 62.6883532]);
    let point316 = new N_Point([-30.4783408, 14.1436556]);
    let point317 = new N_Point([-17.2082556, -16.6031316]);
    let point318 = new N_Point([31.3411268, 6.4978702]);
    let point319 = new N_Point([-10.6151842, -11.9505226]);
    let point320 = new N_Point([-7.4890714, -13.106611]);
    let point321 = new N_Point([4.7559966, 11.299051]);
    let point322 = new N_Point([5.2439814, -0.7126298]);
    let point323 = new N_Point([-19.4683258, 37.4181154]);
    let point324 = new N_Point([0.4354644, -29.4083202]);
    let point325 = new N_Point([-14.3671326, -31.196479]);
    let point326 = new N_Point([-9.7841892, 63.0150608]);
    let point327 = new N_Point([-13.0417572, -25.5757104]);
    let point328 = new N_Point([-26.2349708, 56.8908462]);
    let point329 = new N_Point([-37.0710678, -10.1467864]);
    let point330 = new N_Point([-27.677287, -13.6446588]);
    let point331 = new N_Point([2.0185904, 45.370085]);
    let point332 = new N_Point([-26.0421624, 47.8325084]);
    let point333 = new N_Point([19.1466932, 37.9950234]);
    let point334 = new N_Point([-24.2615418, -21.0826522]);
    let point335 = new N_Point([11.0617034, -14.6734812]);
    let point336 = new N_Point([-86.9015496, 8.3750504]);
    let point337 = new N_Point([-29.9378596, 0.0908516]);
    let point338 = new N_Point([-36.0753436, -13.9819178]);
    let point339 = new N_Point([-33.405061, -21.1812984]);
    let point340 = new N_Point([-16.7869318, -6.984506]);
    let point341 = new N_Point([4.0895908, -35.366418]);
    let point342 = new N_Point([-30.4168928, -5.2497524]);
    let point343 = new N_Point([-6.2416984, -21.3192986]);
    let point344 = new N_Point([-5.4934982, -16.4832056]);
    let point345 = new N_Point([20.8554062, -37.0303714]);
    let point346 = new N_Point([-51.5892574, 1.2126104]);
    let point347 = new N_Point([-3.3036534, -36.050731]);
    let point348 = new N_Point([-19.3646052, 16.8238462]);
    let point349 = new N_Point([-35.533773, 26.1266556]);
    let point350 = new N_Point([28.464032, -37.7186222]);
    let point351 = new N_Point([-0.899451, -7.8094294]);
    let point352 = new N_Point([-5.7375936, -18.977701]);
    let point353 = new N_Point([3.3674844, -6.029124]);
    let point354 = new N_Point([29.0983344, 6.7728764]);
    let point355 = new N_Point([32.504525, 18.1888526]);
    let point356 = new N_Point([-18.7240562, -19.8051656]);
    let point357 = new N_Point([-3.8688828, -21.849474]);
    let point358 = new N_Point([-7.8256414, 59.798527]);
    let point359 = new N_Point([-20.3689998, -24.7625576]);
    let point360 = new N_Point([-5.2804662, -24.3683668]);
    let point361 = new N_Point([9.3317468, 8.4822076]);
    let point362 = new N_Point([-1.2406844, -20.213088]);
    let point363 = new N_Point([-14.6103516, 55.7595586]);
    let point364 = new N_Point([18.9516104, 26.6027186]);
    let point365 = new N_Point([-23.3001028, 37.8920384]);
    let point366 = new N_Point([-1.543629, -30.0949236]);
    let point367 = new N_Point([-15.7791484, 5.056363]);
    let point368 = new N_Point([-23.118635, -10.3646362]);
    let point369 = new N_Point([-22.4232336, -22.2318552]);
    let point370 = new N_Point([-3.4504788, -27.2975014]);
    let point371 = new N_Point([-0.3102492, 12.640416]);
    let point372 = new N_Point([15.7854316, 4.3007624]);
    let point373 = new N_Point([-29.0028542, 11.9859486]);
    let point374 = new N_Point([-24.7491752, 2.6095292]);
    let point375 = new N_Point([-11.475822, -19.8921426]);
    let point376 = new N_Point([-14.5030458, -21.5559298]);
    let point377 = new N_Point([34.9256946, -32.6788606]);
    let point378 = new N_Point([-0.5379122, -33.4903464]);
    let point379 = new N_Point([-10.3777858, 0.8498124]);
    let point380 = new N_Point([-18.6043308, 40.7093518]);
    let point381 = new N_Point([-21.6050656, 2.517717]);
    let point382 = new N_Point([1.488409, 68.760144]);
    let point383 = new N_Point([-10.7264716, 35.3259486]);
    let point384 = new N_Point([-40.7773686, -17.1511766]);
    let point385 = new N_Point([-35.172419, 16.2241746]);
    let point386 = new N_Point([-75.1964682, -24.8429068]);
    let point387 = new N_Point([21.0514454, -30.1456956]);
    let point388 = new N_Point([-0.6033706, -32.9946254]);
    let point389 = new N_Point([34.4529918, -9.8856424]);
    let point390 = new N_Point([-15.9635514, 6.0211194]);
    let point391 = new N_Point([-39.3056268, -31.55313]);
    let point392 = new N_Point([-28.7398564, -22.827694]);
    let point393 = new N_Point([-15.0878828, -11.705943]);
    let point394 = new N_Point([-63.4514018, 2.4453622]);
    let point395 = new N_Point([-9.0605974, -11.3358138]);
    let point396 = new N_Point([-3.5671806, -26.9393704]);
    let point397 = new N_Point([-29.3358312, -20.277607]);
    let point398 = new N_Point([39.7319588, -31.3190432]);
    let point399 = new N_Point([-21.7648814, -20.0798256]);
    let point400 = new N_Point([-11.0762352, -19.2264492]);
    let point401 = new N_Point([4.6583014, -2.4647404]);
    let point402 = new N_Point([-34.1290196, 4.9248048]);
    let point403 = new N_Point([-16.680077, 24.0601302]);
    let point404 = new N_Point([-46.727212, -13.8423]);
    let point405 = new N_Point([22.4871892, -22.2067098]);
    let point406 = new N_Point([-2.9391246, -17.2232066]);
    let point407 = new N_Point([39.0652522, 33.9950794]);
    let point408 = new N_Point([4.0434316, -35.500558]);
    let point409 = new N_Point([-34.4644268, -7.1617318]);
    let point410 = new N_Point([15.5253272, -14.2554262]);
    let point411 = new N_Point([-36.5316578, -10.3933578]);
    let point412 = new N_Point([-19.1969916, -11.081586]);
    let point413 = new N_Point([-9.0810844, 33.1146936]);
    let point414 = new N_Point([-31.0333404, -8.968618]);
    let point415 = new N_Point([3.178706, -31.1549516]);
    let point416 = new N_Point([-36.7943978, -5.6684886]);
    let point417 = new N_Point([-4.5525946, -17.9181548]);
    let point418 = new N_Point([-35.1474706, 30.6788802]);
    let point419 = new N_Point([-22.7152526, 33.9478062]);
    let point420 = new N_Point([-8.9067704, -18.489043]);
    let point421 = new N_Point([-34.1283258, -6.3045812]);
    let point422 = new N_Point([-2.885923, -19.5769654]);
    let point423 = new N_Point([-18.3882292, 4.4132942]);
    let point424 = new N_Point([-53.6442002, -6.2920912]);
    let point425 = new N_Point([3.7830822, -18.8332436]);
    let point426 = new N_Point([46.373383, -26.1834188]);
    let point427 = new N_Point([-28.712656, -22.0722388]);
    let point428 = new N_Point([-26.291135, -26.221463]);
    let point429 = new N_Point([-3.3047696, -21.366967]);
    let point430 = new N_Point([11.0845068, -7.3300216]);
    let point431 = new N_Point([-32.9463324, -2.5841258]);
    let point432 = new N_Point([-3.8613186, -27.0031912]);
    let point433 = new N_Point([-22.345326, -24.1763816]);
    let point434 = new N_Point([47.7190182, -23.3964632]);
    let point435 = new N_Point([12.7491032, 63.9791968]);
    let point436 = new N_Point([0.3258172, 66.2053026]);
    let point437 = new N_Point([13.0791886, -29.9921702]);
    let point438 = new N_Point([11.9864862, 3.1051942]);
    let point439 = new N_Point([19.813329, 33.6250332]);
    let point440 = new N_Point([31.5179464, 21.135439]);
    let point441 = new N_Point([-33.9282224, -18.488143]);
    let point442 = new N_Point([10.0519968, 38.284862]);
    let point443 = new N_Point([63.3720664, -31.2433508]);
    let point444 = new N_Point([0.9871644, 60.8119754]);
    let point445 = new N_Point([-32.9429782, -14.3127094]);
    let point446 = new N_Point([-8.4640842, -27.244472]);
    let point447 = new N_Point([-35.7775196, -26.5036808]);
    let point448 = new N_Point([9.8315808, -40.460496]);
    let point449 = new N_Point([-29.8661606, 64.9225496]);
    let point450 = new N_Point([15.4370454, -22.3121304]);
    let point451 = new N_Point([-34.2351322, 0.6406454]);
    let point452 = new N_Point([-29.9966084, -12.4523858]);
    let point453 = new N_Point([8.252505, -25.0793524]);
    let point454 = new N_Point([-15.500567, 27.103187]);
    let point455 = new N_Point([17.8968922, -27.451757]);
    let point456 = new N_Point([-46.8693728, -4.0312096]);
    let point457 = new N_Point([-66.7908922, -25.5221888]);
    let point458 = new N_Point([12.2444, -1.6066426]);
    let point459 = new N_Point([1.3504258, -1.6091802]);
    let point460 = new N_Point([16.30234, -21.7326448]);
    let point461 = new N_Point([-35.160157, 1.029116]);
    let point462 = new N_Point([-10.7748538, -3.0467554]);
    let point463 = new N_Point([0.5117204, -3.1097872]);
    let point464 = new N_Point([5.1668704, -31.848864]);
    let point465 = new N_Point([18.719366, -18.4008222]);
    let point466 = new N_Point([3.6435802, 14.1395562]);
    let point467 = new N_Point([-0.6832624, -33.8289922]);
    let point468 = new N_Point([-29.844863, 9.8356796]);
    let point469 = new N_Point([-8.7923728, 49.2656878]);
    let point470 = new N_Point([12.7168244, -38.2896954]);
    let point471 = new N_Point([-15.1580198, 6.3796194]);
    let point472 = new N_Point([12.4828082, -36.1942322]);
    let point473 = new N_Point([20.8320524, 10.8799234]);
    let point474 = new N_Point([-11.1910664, 19.3871232]);
    let point475 = new N_Point([12.1977682, 1.5048952]);
    let point476 = new N_Point([14.5053062, -26.697792]);
    let point477 = new N_Point([0.5880576, -19.0274616]);
    let point478 = new N_Point([-15.025664, 6.5419506]);
    let point479 = new N_Point([-43.6118226, -9.825454]);
    let point480 = new N_Point([-7.9184062, -27.789816]);
    let point481 = new N_Point([-22.3573704, 27.3558502]);
    let point482 = new N_Point([-10.2735564, -10.3273506]);
    let point483 = new N_Point([2.526415, -26.3029808]);
    let point484 = new N_Point([-9.1205044, 19.867951]);
    let point485 = new N_Point([-5.2243592, -26.6121946]);
    let point486 = new N_Point([-18.844814, -17.018366]);
    let point487 = new N_Point([-19.8235656, -23.0728414]);
    let point488 = new N_Point([58.8400018, 28.5975256]);
    let point489 = new N_Point([17.6821048, 36.8942144]);
    let point490 = new N_Point([25.6018084, -30.5572816]);
    let point491 = new N_Point([13.7422132, -21.5437392]);
    let point492 = new N_Point([-24.2993324, -9.0353986]);
    let point493 = new N_Point([20.037125, 18.4831014]);
    let point494 = new N_Point([-21.2439114, -5.3488024]);
    let point495 = new N_Point([-18.541731, -24.818029]);
    let point496 = new N_Point([-40.2835488, 29.993239]);
    let point497 = new N_Point([31.241694, 38.4630074]);
    let point498 = new N_Point([-2.0081092, -12.28362]);
    let point499 = new N_Point([-5.669505, 1.9413006]);
    let point500 = new N_Point([-16.7978344, -23.035097]);


    //let data = [point1, point2, point3, point4, point5, point6];
    let data = [

        point1,
        point2,
        point3,
        point4,
        point5,
        point6,
        point7,
        point8,
        point9,
        point10,
        point11,
        point12,
        point13,
        point14,
        point15,
        point16,
        point17,
        point18,
        point19,
        point20,
        point21,
        point22,
        point23,
        point24,
        point25,
        point26,
        point27,
        point28,
        point29,
        point30,
        point31,
        point32,
        point33,
        point34,
        point35,
        point36,
        point37,
        point38,
        point39,
        point40,
        point41,
        point42,
        point43,
        point44,
        point45,
        point46,
        point47,
        point48,
        point49,
        point50,
        point51,
        point52,
        point53,
        point54,
        point55,
        point56,
        point57,
        point58,
        point59,
        point60,
        point61,
        point62,
        point63,
        point64,
        point65,
        point66,
        point67,
        point68,
        point69,
        point70,
        point71,
        point72,
        point73,
        point74,
        point75,
        point76,
        point77,
        point78,
        point79,
        point80,
        point81,
        point82,
        point83,
        point84,
        point85,
        point86,
        point87,
        point88,
        point89,
        point90,
        point91,
        point92,
        point93,
        point94,
        point95,
        point96,
        point97,
        point98,
        point99,
        point100,
        point101,
        point102,
        point103,
        point104,
        point105,
        point106,
        point107,
        point108,
        point109,
        point110,
        point111,
        point112,
        point113,
        point114,
        point115,
        point116,
        point117,
        point118,
        point119,
        point120,
        point121,
        point122,
        point123,
        point124,
        point125,
        point126,
        point127,
        point128,
        point129,
        point130,
        point131,
        point132,
        point133,
        point134,
        point135,
        point136,
        point137,
        point138,
        point139,
        point140,
        point141,
        point142,
        point143,
        point144,
        point145,
        point146,
        point147,
        point148,
        point149,
        point150,
        point151,
        point152,
        point153,
        point154,
        point155,
        point156,
        point157,
        point158,
        point159,
        point160,
        point161,
        point162,
        point163,
        point164,
        point165,
        point166,
        point167,
        point168,
        point169,
        point170,
        point171,
        point172,
        point173,
        point174,
        point175,
        point176,
        point177,
        point178,
        point179,
        point180,
        point181,
        point182,
        point183,
        point184,
        point185,
        point186,
        point187,
        point188,
        point189,
        point190,
        point191,
        point192,
        point193,
        point194,
        point195,
        point196,
        point197,
        point198,
        point199,
        point200,
        point201,
        point202,
        point203,
        point204,
        point205,
        point206,
        point207,
        point208,
        point209,
        point210,
        point211,
        point212,
        point213,
        point214,
        point215,
        point216,
        point217,
        point218,
        point219,
        point220,
        point221,
        point222,
        point223,
        point224,
        point225,
        point226,
        point227,
        point228,
        point229,
        point230,
        point231,
        point232,
        point233,
        point234,
        point235,
        point236,
        point237,
        point238,
        point239,
        point240,
        point241,
        point242,
        point243,
        point244,
        point245,
        point246,
        point247,
        point248,
        point249,
        point250,
        point251,
        point252,
        point253,
        point254,
        point255,
        point256,
        point257,
        point258,
        point259,
        point260,
        point261,
        point262,
        point263,
        point264,
        point265,
        point266,
        point267,
        point268,
        point269,
        point270,
        point271,
        point272,
        point273,
        point274,
        point275,
        point276,
        point277,
        point278,
        point279,
        point280,
        point281,
        point282,
        point283,
        point284,
        point285,
        point286,
        point287,
        point288,
        point289,
        point290,
        point291,
        point292,
        point293,
        point294,
        point295,
        point296,
        point297,
        point298,
        point299,
        point300,
        point301,
        point302,
        point303,
        point304,
        point305,
        point306,
        point307,
        point308,
        point309,
        point310,
        point311,
        point312,
        point313,
        point314,
        point315,
        point316,
        point317,
        point318,
        point319,
        point320,
        point321,
        point322,
        point323,
        point324,
        point325,
        point326,
        point327,
        point328,
        point329,
        point330,
        point331,
        point332,
        point333,
        point334,
        point335,
        point336,
        point337,
        point338,
        point339,
        point340,
        point341,
        point342,
        point343,
        point344,
        point345,
        point346,
        point347,
        point348,
        point349,
        point350,
        point351,
        point352,
        point353,
        point354,
        point355,
        point356,
        point357,
        point358,
        point359,
        point360,
        point361,
        point362,
        point363,
        point364,
        point365,
        point366,
        point367,
        point368,
        point369,
        point370,
        point371,
        point372,
        point373,
        point374,
        point375,
        point376,
        point377,
        point378,
        point379,
        point380,
        point381,
        point382,
        point383,
        point384,
        point385,
        point386,
        point387,
        point388,
        point389,
        point390,
        point391,
        point392,
        point393,
        point394,
        point395,
        point396,
        point397,
        point398,
        point399,
        point400,
        point401,
        point402,
        point403,
        point404,
        point405,
        point406,
        point407,
        point408,
        point409,
        point410,
        point411,
        point412,
        point413,
        point414,
        point415,
        point416,
        point417,
        point418,
        point419,
        point420,
        point421,
        point422,
        point423,
        point424,
        point425,
        point426,
        point427,
        point428,
        point429,
        point430,
        point431,
        point432,
        point433,
        point434,
        point435,
        point436,
        point437,
        point438,
        point439,
        point440,
        point441,
        point442,
        point443,
        point444,
        point445,
        point446,
        point447,
        point448,
        point449,
        point450,
        point451,
        point452,
        point453,
        point454,
        point455,
        point456,
        point457,
        point458,
        point459,
        point460,
        point461,
        point462,
        point463,
        point464,
        point465,
        point466,
        point467,
        point468,
        point469,
        point470,
        point471,
        point472,
        point473,
        point474,
        point475,
        point476,
        point477,
        point478,
        point479,
        point480,
        point481,
        point482,
        point483,
        point484,
        point485,
        point486,
        point487,
        point488,
        point489,
        point490,
        point491,
        point492,
        point493,
        point494,
        point495,
        point496,
        point497,
        point498,
        point499,
        point500


    ];
    
    let pointa1 = new N_Pointa([21.3700546, 24.6978998]);
    let pointa2 = new N_Pointa([-7.92953422, 31.9175188]);
    let pointa3 = new N_Pointa([47.1866842, -43.6963842]);
    let pointa4 = new N_Pointa([-18.6035125, -22.158793]);
    let pointa5 = new N_Pointa([65.9584992, -4.84309262]);
    let pointa6 = new N_Pointa([-36.797005, 64.1332128]);
    let pointa7 = new N_Pointa([8.95881378, 38.5786042]);
    let pointa8 = new N_Pointa([75.7421306, -10.50646204]);
    let pointa9 = new N_Pointa([20.1630274, 25.5242178]);
    let pointa10 = new N_Pointa([-48.3234726, 6.84987046]);
    let pointa11 = new N_Pointa([44.2262212, -35.0946382]);
    let pointa12 = new N_Pointa([-23.6117368, 22.4247388]);
    let pointa13 = new N_Pointa([6.66494878, -17.55235174]);
    let pointa14 = new N_Pointa([22.5335566, 41.6562502]);
    let pointa15 = new N_Pointa([1.19711942, 15.32486824]);
    let pointa16 = new N_Pointa([39.750607, 43.4817956]);
    let pointa17 = new N_Pointa([8.94062206, 28.9063124]);
    let pointa18 = new N_Pointa([2.31013616, 37.3017648]);
    let pointa19 = new N_Pointa([36.0446714, -19.49158416]);
    let pointa20 = new N_Pointa([13.4028786, 25.8695368]);
    let pointa21 = new N_Pointa([1.9211331, -23.9574132]);
    let pointa22 = new N_Pointa([51.5089486, -0.58471688]);
    let pointa23 = new N_Pointa([71.9449068, 39.644964]);
    let pointa24 = new N_Pointa([46.5456952, -33.6725996]);
    let pointa25 = new N_Pointa([2.4529414, 4.04264954]);
    let pointa26 = new N_Pointa([58.7923678, 35.1780794]);
    let pointa27 = new N_Pointa([50.9865258, 9.0019755]);
    let pointa28 = new N_Pointa([-10.45291956, 35.8884334]);
    let pointa29 = new N_Pointa([-17.42386304, 32.4335896]);
    let pointa30 = new N_Pointa([8.8150468, -9.65834028]);
    let pointa31 = new N_Pointa([-1.49641702, -18.2750341]);
    let pointa32 = new N_Pointa([16.51158586, 54.351359]);
    let pointa33 = new N_Pointa([-36.4124718, -22.6015446]);
    let pointa34 = new N_Pointa([18.50667202, 26.7190952]);
    let pointa35 = new N_Pointa([25.1013586, 46.4148802]);
    let pointa36 = new N_Pointa([-16.5063202, 46.3489788]);
    let pointa37 = new N_Pointa([50.438243, -30.5549008]);
    let pointa38 = new N_Pointa([12.12584466, -0.44958114]);
    let pointa39 = new N_Pointa([-4.82031318, -22.7973118]);
    let pointa40 = new N_Pointa([17.73394278, -12.64874576]);
    let pointa41 = new N_Pointa([51.062662, 9.0958583]);
    let pointa42 = new N_Pointa([22.04976, 9.20249094]);
    let pointa43 = new N_Pointa([6.99959842, 48.686751]);
    let pointa44 = new N_Pointa([-14.10364448, 23.7389174]);
    let pointa45 = new N_Pointa([57.086826, -39.6760392]);
    let pointa46 = new N_Pointa([-24.7896152, -10.80211464]);
    let pointa47 = new N_Pointa([12.82222476, -44.5484952]);
    let pointa48 = new N_Pointa([14.76982886, -4.14379232]);
    let pointa49 = new N_Pointa([-9.26431708, 29.0050794]);
    let pointa50 = new N_Pointa([11.80445222, 6.42425706]);
    let pointa51 = new N_Pointa([-6.11968, 22.5126126]);
    let pointa52 = new N_Pointa([29.4812038, -14.99275404]);
    let pointa53 = new N_Pointa([-16.84178726, 42.359349]);
    let pointa54 = new N_Pointa([45.9783936, 22.2044794]);
    let pointa55 = new N_Pointa([21.6950672, 44.3814044]);
    let pointa56 = new N_Pointa([43.3947178, 11.10434068]);
    let pointa57 = new N_Pointa([55.8437484, 51.221936]);
    let pointa58 = new N_Pointa([-7.21065484, -0.04779086]);
    let pointa59 = new N_Pointa([7.96843714, 11.3142887]);
    let pointa60 = new N_Pointa([-20.7749248, 25.3930164]);
    let pointa61 = new N_Pointa([13.97917156, 0.1162597]);
    let pointa62 = new N_Pointa([39.9599734, 11.31842008]);
    let pointa63 = new N_Pointa([67.4625116, -33.209868]);
    let pointa64 = new N_Pointa([7.8945247, 18.12379116]);
    let pointa65 = new N_Pointa([29.634015, 24.4259414]);
    let pointa66 = new N_Pointa([66.6318212, 24.1580582]);
    let pointa67 = new N_Pointa([33.7847828, -17.8559116]);
    let pointa68 = new N_Pointa([12.87864764, 2.93207842]);
    let pointa69 = new N_Pointa([18.39079504, -9.18451574]);
    let pointa70 = new N_Pointa([-9.08378436, 30.692406]);
    let pointa71 = new N_Pointa([-6.84560034, 26.8099606]);
    let pointa72 = new N_Pointa([42.4944968, -9.05586478]);
    let pointa73 = new N_Pointa([-23.7819102, -11.32611682]);
    let pointa74 = new N_Pointa([17.54877018, -23.8880736]);
    let pointa75 = new N_Pointa([17.01584228, -13.12318048]);
    let pointa76 = new N_Pointa([60.5103542, 34.600732]);
    let pointa77 = new N_Pointa([14.24765532, 47.9282206]);
    let pointa78 = new N_Pointa([29.054445, 27.2745228]);
    let pointa79 = new N_Pointa([15.43339992, -28.8975726]);
    let pointa80 = new N_Pointa([20.0597504, 14.65287518]);
    let pointa81 = new N_Pointa([56.4152412, 16.29767128]);
    let pointa82 = new N_Pointa([12.59721888, -19.22816804]);
    let pointa83 = new N_Pointa([-2.9071959, -2.12971416]);
    let pointa84 = new N_Pointa([-13.9935101, 22.8027624]);
    let pointa85 = new N_Pointa([50.9102152, -48.066941]);
    let pointa86 = new N_Pointa([14.17388202, 45.7769388]);
    let pointa87 = new N_Pointa([12.51387404, -17.97450456]);
    let pointa88 = new N_Pointa([7.05610548, 1.86082458]);
    let pointa89 = new N_Pointa([56.7070328, 3.16222776]);
    let pointa90 = new N_Pointa([7.15603338, 7.90878404]);
    let pointa91 = new N_Pointa([43.804291, 32.3389182]);
    let pointa92 = new N_Pointa([30.6176746, -17.97144946]);
    let pointa93 = new N_Pointa([18.39336894, 25.3369206]);
    let pointa94 = new N_Pointa([-31.4365588, -1.56985924]);
    let pointa95 = new N_Pointa([10.27762054, -6.27748936]);
    let pointa96 = new N_Pointa([31.4309604, 45.5464872]);
    let pointa97 = new N_Pointa([8.46888478, 31.2782292]);
    let pointa98 = new N_Pointa([-5.17925564, -28.2765132]);
    let pointa99 = new N_Pointa([47.7243688, 36.0171832]);
    let pointa100 = new N_Pointa([-38.4439818, -10.1135055]);
    let pointa101 = new N_Pointa([-22.7865198, 15.12170328]);
    let pointa102 = new N_Pointa([-32.105707, -26.015282]);
    let pointa103 = new N_Pointa([-49.023599, -7.55728974]);
    let pointa104 = new N_Pointa([37.2141668, 16.01244316]);
    let pointa105 = new N_Pointa([-19.36987592, 8.0311962]);
    let pointa106 = new N_Pointa([-11.02597006, -4.6594848]);
    let pointa107 = new N_Pointa([-1.0035655, 47.9373494]);
    let pointa108 = new N_Pointa([-20.7704632, 28.8483716]);
    let pointa109 = new N_Pointa([44.1071578, -31.2673278]);
    let pointa110 = new N_Pointa([2.9561898, -32.099766]);
    let pointa111 = new N_Pointa([44.9674436, -26.1591544]);
    let pointa112 = new N_Pointa([22.8004256, -41.4142936]);
    let pointa113 = new N_Pointa([27.692723, -25.5389492]);
    let pointa114 = new N_Pointa([24.857432, 41.5670382]);
    let pointa115 = new N_Pointa([-29.4106572, -15.85761232]);
    let pointa116 = new N_Pointa([7.14851016, -21.9309918]);
    let pointa117 = new N_Pointa([10.74772952, 11.9984088]);
    let pointa118 = new N_Pointa([14.25823782, 39.8361752]);
    let pointa119 = new N_Pointa([15.6599048, -31.8178736]);
    let pointa120 = new N_Pointa([19.05997346, -21.5672244]);
    let pointa121 = new N_Pointa([-0.8464306, -6.01612312]);
    let pointa122 = new N_Pointa([21.7600726, 15.49451458]);
    let pointa123 = new N_Pointa([-6.36345464, 13.47410744]);
    let pointa124 = new N_Pointa([-1.08482408, 61.1911456]);
    let pointa125 = new N_Pointa([-9.53836534, -10.06029556]);
    let pointa126 = new N_Pointa([-16.06058838, -3.6559479]);
    let pointa127 = new N_Pointa([27.0211952, 46.3961162]);
    let pointa128 = new N_Pointa([14.35417962, -24.818749]);
    let pointa129 = new N_Pointa([18.20920488, -25.2777848]);
    let pointa130 = new N_Pointa([-18.22758556, 1.99006456]);
    let pointa131 = new N_Pointa([-14.75331276, 29.2859962]);
    let pointa132 = new N_Pointa([38.5498914, 9.75533904]);
    let pointa133 = new N_Pointa([14.02459858, 39.4138162]);
    let pointa134 = new N_Pointa([-14.9700204, -5.7339779]);
    let pointa135 = new N_Pointa([5.16400826, 56.908773]);
    let pointa136 = new N_Pointa([16.80080102, -34.6063402]);
    let pointa137 = new N_Pointa([-3.26711746, 28.1841464]);
    let pointa138 = new N_Pointa([50.5216212, -22.9563528]);
    let pointa139 = new N_Pointa([40.6168184, -10.44290242]);
    let pointa140 = new N_Pointa([11.87439086, 50.630669]);
    let pointa141 = new N_Pointa([-22.0411812, 17.9294444]);
    let pointa142 = new N_Pointa([22.7194972, 5.77509296]);
    let pointa143 = new N_Pointa([93.0206332, -45.6884064]);
    let pointa144 = new N_Pointa([64.1694648, 37.1459162]);
    let pointa145 = new N_Pointa([8.05652756, 13.75420988]);
    let pointa146 = new N_Pointa([4.16061512, 4.81296958]);
    let pointa147 = new N_Pointa([26.3905528, 27.0690416]);
    let pointa148 = new N_Pointa([37.909739, 24.122374]);
    let pointa149 = new N_Pointa([8.65158486, 13.19415206]);
    let pointa150 = new N_Pointa([0.89666024, 13.26713486]);
    let pointa151 = new N_Pointa([-2.5416999, -28.1092864]);
    let pointa152 = new N_Pointa([13.95931082, -3.58392754]);
    let pointa153 = new N_Pointa([-31.3418262, 8.70677508]);
    let pointa154 = new N_Pointa([23.0574864, 2.12857198]);
    let pointa155 = new N_Pointa([-8.64014482, 30.7074742]);
    let pointa156 = new N_Pointa([-18.43019072, 27.4570562]);
    let pointa157 = new N_Pointa([13.0624225, 38.2435242]);
    let pointa158 = new N_Pointa([77.3457022, -48.1700132]);
    let pointa159 = new N_Pointa([12.3364483, -37.3032256]);
    let pointa160 = new N_Pointa([51.346445, -28.0749986]);
    let pointa161 = new N_Pointa([20.974312, 5.91290068]);
    let pointa162 = new N_Pointa([-5.5367159, -10.36291434]);
    let pointa163 = new N_Pointa([44.2131034, 8.97260056]);
    let pointa164 = new N_Pointa([45.6329916, -9.28291254]);
    let pointa165 = new N_Pointa([25.1794508, -7.21514842]);
    let pointa166 = new N_Pointa([9.12515164, -5.32825842]);
    let pointa167 = new N_Pointa([-34.9212418, -17.65967134]);
    let pointa168 = new N_Pointa([27.90632, 9.98451576]);
    let pointa169 = new N_Pointa([-10.92708016, 22.0126944]);
    let pointa170 = new N_Pointa([-19.4476775, 3.64396154]);
    let pointa171 = new N_Pointa([93.8883448, -50.340857]);
    let pointa172 = new N_Pointa([-2.42039148, -35.1043352]);
    let pointa173 = new N_Pointa([-21.0628342, -3.42090548]);
    let pointa174 = new N_Pointa([16.80720148, 46.420406]);
    let pointa175 = new N_Pointa([65.0045814, 22.6241846]);
    let pointa176 = new N_Pointa([-45.5377832, 21.111094]);
    let pointa177 = new N_Pointa([25.074617, -27.877502]);
    let pointa178 = new N_Pointa([35.3167236, -11.61683796]);
    let pointa179 = new N_Pointa([-24.251235, -18.70669208]);
    let pointa180 = new N_Pointa([31.7909474, -40.1978556]);
    let pointa181 = new N_Pointa([14.65097216, 8.63776556]);
    let pointa182 = new N_Pointa([27.1525946, 38.3622842]);
    let pointa183 = new N_Pointa([-8.426624, -6.30946222]);
    let pointa184 = new N_Pointa([26.3556934, -4.0019402]);
    let pointa185 = new N_Pointa([-3.2234094, 39.7605434]);
    let pointa186 = new N_Pointa([5.00351944, -2.19563878]);
    let pointa187 = new N_Pointa([40.3681786, 34.176278]);
    let pointa188 = new N_Pointa([-1.41538196, 41.8948502]);
    let pointa189 = new N_Pointa([-45.4193158, -9.15043684]);
    let pointa190 = new N_Pointa([44.0060046, -18.97148406]);
    let pointa191 = new N_Pointa([35.6816678, 6.3274604]);
    let pointa192 = new N_Pointa([12.59408536, -15.57804664]);
    let pointa193 = new N_Pointa([20.0838478, 40.7512444]);
    let pointa194 = new N_Pointa([49.2603868, 17.0587102]);
    let pointa195 = new N_Pointa([62.0513184, 18.10161064]);
    let pointa196 = new N_Pointa([-8.80609842, 45.4334538]);
    let pointa197 = new N_Pointa([45.2828206, -27.1253922]);
    let pointa198 = new N_Pointa([5.76635812, -20.6542962]);
    let pointa199 = new N_Pointa([-3.42231576, -10.07584934]);
    let pointa200 = new N_Pointa([69.4009236, 1.66899942]);
    let pointa201 = new N_Pointa([26.09505, -28.2115526]);
    let pointa202 = new N_Pointa([53.7706562, 11.2740887]);
    let pointa203 = new N_Pointa([-9.5621426, 38.4761984]);
    let pointa204 = new N_Pointa([47.496934, 14.67114392]);
    let pointa205 = new N_Pointa([41.6350268, 27.6396258]);
    let pointa206 = new N_Pointa([-5.97177244, 23.5899086]);
    let pointa207 = new N_Pointa([22.3735164, -19.08046986]);
    let pointa208 = new N_Pointa([-4.04398428, 15.2255409]);
    let pointa209 = new N_Pointa([35.3123112, 29.9298382]);
    let pointa210 = new N_Pointa([-35.1234962, 11.95110448]);
    let pointa211 = new N_Pointa([62.1267002, -39.738642]);
    let pointa212 = new N_Pointa([21.6736592, -3.10160962]);
    let pointa213 = new N_Pointa([65.6445926, 3.63104692]);
    let pointa214 = new N_Pointa([31.1043586, 38.9747588]);
    let pointa215 = new N_Pointa([16.96483366, 34.3933476]);
    let pointa216 = new N_Pointa([-54.5373764, -22.3019928]);
    let pointa217 = new N_Pointa([-19.31134878, 21.4935598]);
    let pointa218 = new N_Pointa([-12.87413556, 48.3046376]);
    let pointa219 = new N_Pointa([22.5896578, -1.96355524]);
    let pointa220 = new N_Pointa([-7.25339428, 45.0478556]);
    let pointa221 = new N_Pointa([3.5492873, -3.27263914]);
    let pointa222 = new N_Pointa([21.3662778, -33.9879362]);
    let pointa223 = new N_Pointa([21.7442148, 33.2598032]);
    let pointa224 = new N_Pointa([40.0772096, -37.490144]);
    let pointa225 = new N_Pointa([12.9610355, -22.1178704]);
    let pointa226 = new N_Pointa([49.7778636, -27.5603802]);
    let pointa227 = new N_Pointa([58.4251658, 20.6330816]);
    let pointa228 = new N_Pointa([43.5152084, 14.49295488]);
    let pointa229 = new N_Pointa([1.49169882, 9.38567822]);
    let pointa230 = new N_Pointa([12.5186922, 50.5931024]);
    let pointa231 = new N_Pointa([-8.15304702, 32.3114414]);
    let pointa232 = new N_Pointa([-1.51035194, 26.8447658]);
    let pointa233 = new N_Pointa([-4.04810294, 61.7384826]);
    let pointa234 = new N_Pointa([-28.163023, -1.38025558]);
    let pointa235 = new N_Pointa([28.2470908, -22.1004948]);
    let pointa236 = new N_Pointa([-12.87900886, 7.95070824]);
    let pointa237 = new N_Pointa([48.181144, -9.16491894]);
    let pointa238 = new N_Pointa([27.4019428, 67.198222]);
    let pointa239 = new N_Pointa([33.326642, 6.8577733]);
    let pointa240 = new N_Pointa([43.3625126, 11.77727634]);
    let pointa241 = new N_Pointa([9.09214908, 1.53496236]);
    let pointa242 = new N_Pointa([7.50355542, 25.937859]);
    let pointa243 = new N_Pointa([31.9460398, 14.4877294]);
    let pointa244 = new N_Pointa([-81.0794444, 26.2842248]);
    let pointa245 = new N_Pointa([0.08378604, 51.1945428]);
    let pointa246 = new N_Pointa([8.95750076, -32.6284018]);
    let pointa247 = new N_Pointa([18.21040926, 21.1677738]);
    let pointa248 = new N_Pointa([50.2551036, -6.39034662]);
    let pointa249 = new N_Pointa([43.0823946, -14.3866867]);
    let pointa250 = new N_Pointa([4.03180022, 23.1435468]);
    let pointa251 = new N_Pointa([10.42380046, -1.91616996]);
    let pointa252 = new N_Pointa([-0.09355996, 1.53172254]);
    let pointa253 = new N_Pointa([-19.51145972, 20.4150376]);
    let pointa254 = new N_Pointa([44.893991, -19.9852164]);
    let pointa255 = new N_Pointa([-13.71707904, 9.51224884]);
    let pointa256 = new N_Pointa([45.597243, 27.9301286]);
    let pointa257 = new N_Pointa([9.59806186, 47.3272448]);
    let pointa258 = new N_Pointa([34.6729518, -17.69048172]);
    let pointa259 = new N_Pointa([30.7835384, 0.80193336]);
    let pointa260 = new N_Pointa([-16.22820816, 44.5920184]);
    let pointa261 = new N_Pointa([-6.28240296, -2.51406852]);
    let pointa262 = new N_Pointa([70.782887, -40.6299406]);
    let pointa263 = new N_Pointa([18.88074408, 31.1788624]);
    let pointa264 = new N_Pointa([35.0824712, -16.17127516]);
    let pointa265 = new N_Pointa([-10.93054318, 19.53190492]);
    let pointa266 = new N_Pointa([21.7030162, 66.6360366]);
    let pointa267 = new N_Pointa([33.5193304, 31.3143576]);
    let pointa268 = new N_Pointa([-21.2064862, 16.74124688]);


    let dataa = [
        pointa1,
        pointa2,
        pointa3,
        pointa4,
        pointa5,
        pointa6,
        pointa7,
        pointa8,
        pointa9,
        pointa10,
        pointa11,
        pointa12,
        pointa13,
        pointa14,
        pointa15,
        pointa16,
        pointa17,
        pointa18,
        pointa19,
        pointa20,
        pointa21,
        pointa22,
        pointa23,
        pointa24,
        pointa25,
        pointa26,
        pointa27,
        pointa28,
        pointa29,
        pointa30,
        pointa31,
        pointa32,
        pointa33,
        pointa34,
        pointa35,
        pointa36,
        pointa37,
        pointa38,
        pointa39,
        pointa40,
        pointa41,
        pointa42,
        pointa43,
        pointa44,
        pointa45,
        pointa46,
        pointa47,
        pointa48,
        pointa49,
        pointa50,
        pointa51,
        pointa52,
        pointa53,
        pointa54,
        pointa55,
        pointa56,
        pointa57,
        pointa58,
        pointa59,
        pointa60,
        pointa61,
        pointa62,
        pointa63,
        pointa64,
        pointa65,
        pointa66,
        pointa67,
        pointa68,
        pointa69,
        pointa70,
        pointa71,
        pointa72,
        pointa73,
        pointa74,
        pointa75,
        pointa76,
        pointa77,
        pointa78,
        pointa79,
        pointa80,
        pointa81,
        pointa82,
        pointa83,
        pointa84,
        pointa85,
        pointa86,
        pointa87,
        pointa88,
        pointa89,
        pointa90,
        pointa91,
        pointa92,
        pointa93,
        pointa94,
        pointa95,
        pointa96,
        pointa97,
        pointa98,
        pointa99,
        pointa100,
        pointa101,
        pointa102,
        pointa103,
        pointa104,
        pointa105,
        pointa106,
        pointa107,
        pointa108,
        pointa109,
        pointa110,
        pointa111,
        pointa112,
        pointa113,
        pointa114,
        pointa115,
        pointa116,
        pointa117,
        pointa118,
        pointa119,
        pointa120,
        pointa121,
        pointa122,
        pointa123,
        pointa124,
        pointa125,
        pointa126,
        pointa127,
        pointa128,
        pointa129,
        pointa130,
        pointa131,
        pointa132,
        pointa133,
        pointa134,
        pointa135,
        pointa136,
        pointa137,
        pointa138,
        pointa139,
        pointa140,
        pointa141,
        pointa142,
        pointa143,
        pointa144,
        pointa145,
        pointa146,
        pointa147,
        pointa148,
        pointa149,
        pointa150,
        pointa151,
        pointa152,
        pointa153,
        pointa154,
        pointa155,
        pointa156,
        pointa157,
        pointa158,
        pointa159,
        pointa160,
        pointa161,
        pointa162,
        pointa163,
        pointa164,
        pointa165,
        pointa166,
        pointa167,
        pointa168,
        pointa169,
        pointa170,
        pointa171,
        pointa172,
        pointa173,
        pointa174,
        pointa175,
        pointa176,
        pointa177,
        pointa178,
        pointa179,
        pointa180,
        pointa181,
        pointa182,
        pointa183,
        pointa184,
        pointa185,
        pointa186,
        pointa187,
        pointa188,
        pointa189,
        pointa190,
        pointa191,
        pointa192,
        pointa193,
        pointa194,
        pointa195,
        pointa196,
        pointa197,
        pointa198,
        pointa199,
        pointa200,
        pointa201,
        pointa202,
        pointa203,
        pointa204,
        pointa205,
        pointa206,
        pointa207,
        pointa208,
        pointa209,
        pointa210,
        pointa211,
        pointa212,
        pointa213,
        pointa214,
        pointa215,
        pointa216,
        pointa217,
        pointa218,
        pointa219,
        pointa220,
        pointa221,
        pointa222,
        pointa223,
        pointa224,
        pointa225,
        pointa226,
        pointa227,
        pointa228,
        pointa229,
        pointa230,
        pointa231,
        pointa232,
        pointa233,
        pointa234,
        pointa235,
        pointa236,
        pointa237,
        pointa238,
        pointa239,
        pointa240,
        pointa241,
        pointa242,
        pointa243,
        pointa244,
        pointa245,
        pointa246,
        pointa247,
        pointa248,
        pointa249,
        pointa250,
        pointa251,
        pointa252,
        pointa253,
        pointa254,
        pointa255,
        pointa256,
        pointa257,
        pointa258,
        pointa259,
        pointa260,
        pointa261,
        pointa262,
        pointa263,
        pointa264,
        pointa265,
        pointa266,
        pointa267,
        pointa268

    ];


    //build KD-tree with data

    var dataChange = data.slice(); //variable temporal porque la siguiente linea modifica data!!!!!
    var dataKNN = data.slice();

    var root = buildKDTree(dataChange);
    console.log(root);

    // closest point
    var closestPoint = closest_point_brute_force(data, point);

    console.log("CLOSEST POINT BRUTE FORCE : " + closestPoint);

    closestPoint = closest_point(root, point);
    console.log("CLOSEST POINT NAIVE : " + closestPoint.point.vectorialSpace);

    //KNN(dataKNN, 5, point);

    //plot points
    var x = point[0];
    var y = point[1];

    fill(81, 209, 246);
    circle(x, height - y, 3);
    textSize(4);
    text(x + ',' + y, x + 5, height - y);




    for (let i = 0; i < data.length; i++) {
        x = data[i].vectorialSpace[0];
        y = data[i].vectorialSpace[1];
        fill(255, 255, 255);
        circle(x, height - y, 2);
        textSize(2);
       // text(x + ',' + y, x + 5, height - y);
    }

    for (let i = 0; i < dataa.length; i++) {
        x = dataa[i].vectorialSpace[0];
        y = dataa[i].vectorialSpace[1];
        fill(255, 0, 0);
        circle(x, height - y, 2);
        textSize(2);
        //text(x + ',' + y, x + 5, height - y);
    }

    x = closestPoint.point.vectorialSpace[0];
    y = closestPoint.point.vectorialSpace[1];
    fill(57, 255, 20);
    circle(x, height - y, 7);
    textSize(3);
    text(x + ',' + y, x + 5, height - y);

    // plot graph
    // var graph = generateDot(root);

    //   var options = {
    //       format: 'svg'
    //  }

    //  var image = Viz(graph, options);
    //var image = Viz(graph,'svg');

    //  var graph_holder = document.getElementById('graph_holder');

    //  graph_holder.innerHTML = image;		// SVG en el div de imagen
}
