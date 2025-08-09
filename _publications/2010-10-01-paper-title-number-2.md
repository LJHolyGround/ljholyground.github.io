---
title: "OBIFormer: A fast attentive denoising framework for oracle bone inscriptions"
header:
    teaser: obiformer.jpg
collection: publications
category: manuscripts
permalink: /publication/2010-10-01-paper-title-number-2
excerpt: 'This paper is about the number 2. The number 3 is left for future work.'
date: 2025-04-10
venue: 'Displays'
githuburl: 'https://github.com/LJHolyGround/OBIFormer'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S0141938225000964'
authors: 'Jinhao Li, Zijian Chen, Tingzhu Chen, Zhiji Liu, Guangtao Zhai.'
---

Oracle bone inscriptions (OBIs) are the earliest known form of Chinese characters and serve as a valuable resource for research in anthropology and archaeology. However, most excavated fragments are severely degraded due to thousands of years of natural weathering, corrosion, and man-made destruction, making automatic OBI recognition extremely challenging. Previous methods either focus on pixel-level information or utilize vanilla transformers for glyph-based OBI denoising, which leads to tremendous computational overhead. Therefore, this paper proposes a fast attentive denoising framework for oracle bone inscriptions, i.e., OBIFormer. It leverages channel-wise self-attention, glyph extraction, and selective kernel feature fusion to reconstruct denoised images precisely while being computationally efficient. Our OBIFormer achieves state-of-the-art denoising performance for PSNR and SSIM metrics on synthetic and original OBI datasets. Furthermore, comprehensive experiments on a real oracle dataset demonstrate the great potential of our OBIFormer in assisting automatic OBI recognition. The code will be made available at [https://github.com/LJHolyGround/OBIFormer](https://github.com/LJHolyGround/OBIFormer).