document.addEventListener('DOMContentLoaded', function() {
    const folder1 = './data';
    
    const imageFiles = ['OBIDiff_032000_y00756 a_1.png', 'GT_150107_y01232_1.png', 'OBIDiff_034000_t01423_1.png', 'OBIDiff_001109_w01125_1.png', 'GT_150040_t02615_1.png', 'OBIDiff_018039_h25614_1.png', 'OBIDiff_010001_t00923_2.png', 'GT_079018_y01177 a_1.png', 'GT_079000_t04524_1.png', 'GT_149030_t03056_1.png', 'GT_141002_t02332_1.png', 'GT_112000_w00959 a_1.png', 'GT_089001_h15006 a_1.png', 'GT_111000_h14149 c_1.png', 'GT_114014_y00841_1.png', 'GT_031000_t00646_1.png', 'GT_100004_h09775 a_2.png', 'OBIDiff_073000_y02185_1.png', 'GT_076000_y00778 c_1.png', 'OBIDiff_003085_h22589_1.png', 'OBIDiff_009021_w00618 c_1.png', 'OBIDiff_070000_t02917_2.png', 'OBIDiff_018053_h37869_1.png', 'GT_133001_h14267_1.png', 'OBIDiff_063060_t01105_1.png', 'OBIDiff_062001_h31792_1.png', 'OBIDiff_048008_y00846_1.png', 'GT_068009_y01088_1.png', 'GT_117020_t03246_1.png', 'OBIDiff_067002_h14052_1.png', 'GT_150069_y00546 a_1.png', 'GT_145000_y01924_1.png', 'OBIDiff_073006_y02632_2.png', 'OBIDiff_010067_w00302_1.png', 'OBIDiff_003059_h33241_1.png', 'GT_116005_h17516 a_1.png', 'GT_115008_h31285_1.png', 'OBIDiff_023000_t03883_1.png', 'OBIDiff_015000_w00550 a_1.png', 'OBIDiff_003043_h33056 a_1.png', 'OBIDiff_002038_h19543_1.png', 'GT_141001_y01117 c_2.png', 'OBIDiff_030042_t00435_1.png', 'OBIDiff_002050_y00926_1.png', 'OBIDiff_010009_h24160_1.png', 'GT_088013_t02539_1.png', 'GT_003009_h33917_1.png', 'OBIDiff_033001_t04105_1.png', 'OBIDiff_001166_t03619_1.png', 'GT_036007_t02232_2.png', 'GT_111007_y00369 c_1.png', 'GT_002106_t01111_1.png', 'OBIDiff_001230_t02769_1.png', 'GT_121060_h15044_1.png', 'OBIDiff_041000_h35268_2.png', 'OBIDiff_048044_h17453_1.png', 'GT_125000_t02908_1.png', 'GT_086010_w00899_1.png', 'GT_100034_h19348 a_1.png', 'OBIDiff_003011_h30625_1.png', 'GT_150082_h34738_1.png', 'GT_078057_t03706_1.png', 'GT_085008_h32527_1.png', 'GT_098018_h15768 a_1.png', 'GT_146000_y02409_1.png', 'OBIDiff_020000_t02236_1.png', 'OBIDiff_003049_h34294_1.png', 'GT_108002_h28009_1.png', 'OBIDiff_048072_h30240_1.png', 'OBIDiff_038000_w00303_1.png', 'OBIDiff_010032_t02345_2.png', 'OBIDiff_051005_y02444_3.png', 'GT_134014_t03120_1.png', 'OBIDiff_017000_t02859_1.png', 'OBIDiff_053000_w00593_1.png', 'OBIDiff_066001_h14295_2.png', 'OBIDiff_001027_y01037_1.png', 'GT_093000_y00945_1.png', 'OBIDiff_010007_h28260_1.png', 'GT_093001_h10976 c_1.png', 'OBIDiff_030005_y01404_1.png', 'OBIDiff_078015_h33115_2.png', 'GT_098033_t02417_1.png', 'GT_001030_h09171 c_1.png', 'OBIDiff_036009_w00989_1.png', 'OBIDiff_063000_w01823_1.png', 'OBIDiff_001148_h21014_1.png', 'OBIDiff_007001_h12051 c_1.png', 'GT_107021_w00737_1.png', 'GT_098017_w01053_1.png', 'OBIDiff_001054_y00709 a_2.png', 'GT_111022_h24431_1.png', 'GT_150067_t03793_1.png', 'GT_105004_y00549_1.png', 'GT_077001_t03861_1.png', 'GT_150100_y00886 a_1.png', 'OBIDiff_033000_y01258_1.png', 'OBIDiff_017001_h22088_2.png', 'GT_150015_w00383_1.png', 'OBIDiff_036011_h37103_1.png', 'OBIDiff_002141_h20970_1.png', 'OBIDiff_025000_y00581_1.png', 'GT_087024_t00489_1.png', 'OBIDiff_009003_w00942 a_1.png', 'OBIDiff_026028_h32288_1.png', 'OBIDiff_029004_t02772_1.png', 'GT_129001_h22946_1.png', 'GT_134003_t02567_2.png', 'OBIDiff_003080_h38195_1.png', 'OBIDiff_064055_y00254_2.png', 'OBIDiff_002058_y01311_1.png', 'GT_078000_y02416_1.png', 'GT_107022_w00949_1.png', 'GT_026063_h34229_1.png', 'GT_083000_y00757_2.png', 'GT_150042_y00199 c_1.png', 'GT_113015_h26219_1.png', 'GT_129000_t03467_1.png', 'OBIDiff_008000_y00924_1.png', 'OBIDiff_010064_h34128_1.png', 'GT_094023_h23092_1.png', 'OBIDiff_063013_y00190_1.png', 'OBIDiff_047008_h37427_1.png', 'OBIDiff_036000_t03983_1.png', 'GT_068015_t03187_1.png', 'OBIDiff_035000_h16988_1.png', 'GT_077000_h26517_2.png', 'GT_077169_y00713_1.png', 'GT_126004_t03478_1.png', 'GT_110000_h34710_1.png', 'GT_150075_y00414 b_1.png', 'GT_098000_y00422_1.png', 'OBIDiff_019000_h27438_1.png', 'GT_104000_t00934_1.png', 'GT_089008_t04424_1.png', 'OBIDiff_003118_y01180_3.png', 'GT_150079_h27146_5.png', 'OBIDiff_032016_t00748_1.png', 'OBIDiff_064005_t03763_2.png', 'OBIDiff_078048_t02327_1.png', 'OBIDiff_040000_h21749_1.png', 'OBIDiff_003133_h30528_2.png', 'GT_002034_y00680_2.png', 'OBIDiff_001000_h33269_1.png', 'OBIDiff_003042_t00503_1.png', 'OBIDiff_062000_y00105 c_1.png', 'OBIDiff_022009_h39338_1.png', 'GT_002000_w01559_2.png', 'GT_131001_h26038_1.png', 'GT_127000_h32557_1.png', 'OBIDiff_016011_h33159_1.png', 'OBIDiff_001004_y01816_2.png', 'GT_143000_w00967 c_1.png', 'OBIDiff_038007_h31406_1.png', 'GT_131006_y02043 c_1.png', 'GT_003077_h15128_1.png', 'GT_150026_y00103_1.png', 'OBIDiff_064056_h38416_1.png', 'GT_150004_y00533_1.png', 'OBIDiff_078064_y00666_1.png', 'OBIDiff_002018_h26742_1.png', 'OBIDiff_001125_h35351_1.png', 'OBIDiff_009002_y00539 c_1.png', 'GT_108030_t02739_1.png', 'GT_078074_t01022_2.png', 'OBIDiff_002030_h15935 a_1.png', 'GT_150059_w01284_3.png', 'GT_150062_t02391_1.png', 'OBIDiff_010032_t04103_1.png', 'GT_021000_y02075_1.png', 'GT_091054_y02317_1.png', 'GT_063021_y01977_1.png', 'OBIDiff_001014_h32009_1.png', 'GT_121028_t03149_1.png', 'OBIDiff_001114_t03340_1.png', 'OBIDiff_058000_h15081 a_1.png', 'GT_150088_w00530 a_1.png', 'OBIDiff_001001_h23382_1.png', 'GT_134006_w00134_1.png', 'GT_150010_y01092_1.png', 'GT_150033_t03007_1.png', 'GT_078054_t00758_1.png', 'GT_085024_h13506 a_2.png', 'OBIDiff_021000_y02075_1.png', 'OBIDiff_039002_w00899_1.png', 'OBIDiff_048106_h09761_1.png', 'GT_079020_h26091_1.png', 'GT_048000_h17324_1.png', 'OBIDiff_001206_t01337_1.png', 'OBIDiff_031040_y00796 a_1.png', 'OBIDiff_001096_h17145_1.png', 'OBIDiff_027008_y01395_1.png', 'GT_018031_h34605_1.png', 'GT_003057_t02414_1.png', 'OBIDiff_030102_h33553_1.png', 'GT_118004_t01066_2.png', 'OBIDiff_037008_h31678 c_1.png', 'OBIDiff_005000_h14780_1.png', 'GT_073014_h26747_1.png', 'GT_073018_h17724_1.png'];

    const labels = ['False', 'True', 'False', 'False', 'True', 'False', 'False', 'True', 'True', 'True', 'True', 'True', 'True', 'True', 'True', 'True', 'True', 'False', 'True', 'False', 'False', 'False', 'False', '.DS', 'True', 'False', 'False', 'False', 'True', 'True', 'False', 'True', 'True', 'False', 'False', 'False', 'True', 'True', 'False', 'False', 'False', 'False', 'True', 'False', 'False', 'False', 'True', 'True', 'False', 'False', 'True', 'True', 'True', 'False', 'True', 'False', 'False', 'True', 'True', 'True', 'False', 'True', 'True', 'True', 'True', 'True', 'False', 'False', 'True', 'False', 'False', 'False', 'False', 'True', 'False', 'False', 'False', 'False', 'True', 'False', 'True', 'False', 'False', 'True', 'True', 'False', 'False', 'False', 'False', 'True', 'True', 'False', 'True', 'True', 'True', 'True', 'True', 'False', 'False', 'True', 'False', 'False', 'False', 'True', 'False', 'False', 'False', 'True', 'True', 'False', 'False', 'False', 'True', 'True', 'True', 'True', 'True', 'True', 'True', 'False', 'False', 'True', 'False', 'False', 'False', 'True', 'False', 'True', 'True', 'True', 'True', 'True', 'True', 'False', 'True', 'True', 'False', 'True', 'False', 'False', 'False', 'False', 'False', 'True', 'False', 'False', 'False', 'False', 'True', 'True', 'True', 'False', 'False', 'True', 'False', 'True', 'True', 'True', 'False', 'True', 'False', 'False', 'False', 'False', 'True', 'True', 'False', 'True', 'True', 'False', 'True', 'True', 'True', 'False', 'True', 'False', 'False', 'True', 'False', 'True', 'True', 'True', 'True', 'True', 'False', 'False', 'False', 'True', 'True', 'False', 'False', 'False', 'False', 'True', 'True', 'False', 'True', 'False', 'False', 'True', 'True'];
    
    let currentIndex = 0;
    const image1Element = document.getElementById('image');
    const counterElement = document.getElementById('counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const exportBtn = document.getElementById('export-btn');
    const radioButtons = document.querySelectorAll('.selection-radio');
    const startTime = new Date().toISOString();

    // 检查登录状态
    if(!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'login.html';
    }

    // 获取当前用户
    const currentUser = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const major = sessionStorage.getItem('major');
    
    // 存储选择结果的数组
    const selections = Array(imageFiles.length).fill(null);
    
    // 更新计数器
    function updateCounter() {
        counterElement.textContent = `${currentIndex + 1} / ${imageFiles.length}`;
    }
    
    // 加载当前图片
    function loadCurrentImages() {
        if (imageFiles.length === 0) {
            image1Element.src = '';
            image1Element.alt = 'No images available.';
            return;
        }
        
        const currentFile = imageFiles[currentIndex];
        let src = `${folder1}/${currentFile}`;
        image1Element.src = src;
        
        // 恢复当前图片的选择状态
        const currentSelection = selections[currentIndex];
        if (currentSelection) {
            document.querySelector(`.selection-radio[value="${currentSelection}"]`).checked = true;
        } else {
            radioButtons.forEach(radio => radio.checked = false);
        }
        
        updateCounter();
    }
    
    // 更新选择结果
    function updateSelection(folder) {
        selections[currentIndex] = folder;
    }
    
    // 导出结果
    function exportResults() {
        const endTime = new Date().toISOString();

        // 检查是否有未选择的图片
        const unselectedIndices = [];
        selections.forEach((selection, index) => {
            if (!selection || selection === 'Not selected') {
                unselectedIndices.push(index);
            }
        });
    
        // 如果有未选择的图片
        if (unselectedIndices.length > 0) {
            const shouldContinue = confirm(`Warning: ${unselectedIndices.length} images are still unselected. \n\nDo you want to continue exporting?`);
            if (!shouldContinue) {
                return; // 用户取消导出
            }
        }
    
        // 计算统计数据
        const totalCount = imageFiles.length;
        const selectedCount = selections.filter(s => s !== null).length;
        const TPCount = selections.filter((s, i) => s === labels[i] && s === "True").length;
        const TNCount = selections.filter((s, i) => s === labels[i] && s === "False").length;
        const Precision = (TPCount + TNCount) / selectedCount;
        const selectedTrue = selections
                .filter((s, i) => s !== null && labels[i] === "True").length;
        const Recall = TPCount / selectedTrue;
        const F1Score = 2 * Precision * Recall / (Precision + Recall);
        const duration = (new Date(endTime) - new Date(startTime)) / 1000; // 转换为秒
        
        // 直接生成TXT内容
        const txtContent = `User: ${currentUser}
Email: ${email}
Major: ${major}
Duration: ${duration}s

Total Images: ${totalCount}
Selected Images: ${selectedCount}

Precision: ${Precision.toFixed(2)}
Recall: ${Recall.toFixed(2)}
F1 Score: ${F1Score.toFixed(2)}

Note: ${unselectedIndices.length > 0 ? 
            "The statistics do not include unselected images!" : 
            "All images have been selected!"
        }`;

        // 创建并下载TXT文件
        const a = document.createElement('a');
        a.href = URL.createObjectURL(
            new Blob([txtContent], { type: 'text/plain' })
        );
        a.download = 'results.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        // 导出完成后提示
        if (unselectedIndices.length > 0) {
            alert(`Export completed! But please note:\n- Total number of images: ${totalCount}\n- Selected: ${selectedCount}\n- Not selected: ${unselectedIndices.length}\n\nThe statistics do not include unselected images.`);
        } else {
            alert(`Export complete! All ${totalCount} images selected.`);
        }
    }
    
    // 上一张
    prevBtn.addEventListener('click', function() {
        if (imageFiles.length === 0) return;
        
        currentIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
        loadCurrentImages();
    });
    
    // 下一张
    nextBtn.addEventListener('click', function() {
        if (imageFiles.length === 0) return;

        // Check if current image has been selected
        if (selections[currentIndex] === null) {
            const shouldContinue = confirm("You haven't made a selection for this image. Are you sure you want to proceed to the next image without selecting?");
            if (!shouldContinue) {
                return; // User canceled
            }
        }

        // Check if this is the last image
        if (currentIndex === imageFiles.length - 1) {
            alert("This is the last image. You've reached the end of the evaluation.");
            return;
        }
        
        currentIndex = (currentIndex + 1) % imageFiles.length;
        loadCurrentImages();
    });
    
    // 单选按钮事件
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                updateSelection(this.value);
            }
        });
    });
    
    // 导出按钮事件
    exportBtn.addEventListener('click', exportResults);
    
    // 键盘导航
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
    
    // 初始化
    loadCurrentImages();
});