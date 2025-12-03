---
title: "Mitigating Long-tail Distribution in Oracle Bone Inscriptions: Dataset, Model, and Benchmark"
header:
    teaser: obidiff.jpg
collection: publications
category: conferences
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2025-4-13
venue: 'ACM MM'
githuburl: 'https://github.com/OBI-Future/Oracle-P15K'
paperurl: 'https://dl.acm.org/doi/10.1145/3746027.3755067'
evalurl: /files/eval/index
authors: 'Jinhao Li, Zijian Chen, Runze Dong, Tingzhu Chen, Changbo Wang, Guangtao'
citations: "Jinhao Li, Zijian Chen, Runze Jiang, Tingzhu Chen, Changbo Wang, and Guangtao Zhai. 2025. Mitigating Long-tail Distribution in Oracle Bone Inscriptions: Dataset, Model, and Benchmark. In Proceedings of the 33rd ACM International Conference on Multimedia (MM '25). Association for Computing Machinery, New York, NY, USA, 7729–7738. https://doi.org/10.1145/3746027.3755067"
---

The oracle bone inscription (OBI) recognition plays a significant role in understanding the history and culture of ancient China. However, the existing OBI datasets suffer from a long-tail distribution problem, leading to biased performance of OBI recognition models across majority and minority classes. With recent advancements in generative models, OBI synthesis-based data augmentation has become a promising avenue to expand the sample size of minority classes. Unfortunately, current OBI datasets lack large-scale structure-aligned image pairs for generative model training. To address these problems, we first present the Oracle-P15K, a structure-aligned OBI dataset for OBI generation and denoising, consisting of 14,542 images infused with domain knowledge from OBI experts. Second, we propose a diffusion model-based pseudo OBI generator, called OBIDiff, to achieve realistic and controllable OBI generation. Given a clean glyph image and a target rubbing-style image, it can effectively transfer the noise style of the original rubbing to the glyph image. Extensive experiments on OBI downstream tasks and user preference studies show the effectiveness of the proposed Oracle-P15K dataset and demonstrate that OBIDiff can accurately preserve inherent glyph structures while transferring authentic rubbing styles effectively. The dataset, code, and pre-trained models are available at [https://github.com/LJHolyGround/Oracle-P15K](https://github.com/LJHolyGround/Oracle-P15K).
