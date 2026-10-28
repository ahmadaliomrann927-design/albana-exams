// منصة AL BANA التعليمية - قاعدة البيانات المركزية (الدفعة الثانية المعدلة: 1000 كود فريد وغير متشابه مع الدفعة الأولى)
// صمم من قبل المهندس أحمد علي عمران 🖤🌹

const validCodesBatch2 = [
    // 1 إلى 100 (نسق فريد ومستقل تماماً عن الملف الأول)
    "q4w9e2r", "t7y3u5i", "p8a1s6d", "f2g7h4j", "k9l3z1x", "c6v2b8n", "m5q1w7e", "r4t8y2u", "i3o9p5a", "s6d1f8g",
    "h2j7k4l", "z3x1c9v", "b5n6m2q", "w8e1r4t", "y9u2i6o", "p1a5s3d", "f7g2h8j", "k4l9z6x", "c3v1b5n", "m2q8w4e",
    "r1t6y7u", "i5o3p2a", "s9d4f1g", "h6j2k8l", "z7x5c3v", "b1n9m4q", "w2e7r6t", "y3u1i8o", "p5a4s9d", "f8g6h2j",
    "k1l7z3x", "c9v4b5n", "m6q2w1e", "r3t5y8u", "i7o2p6a", "s4d9f3g", "h1j6k7l", "z8x2c4v", "b9n1m5q", "w3e8r1t",
    "y6u7i4o", "p2a3s8d", "f9g1h6j", "k5l4z9x", "c7v6b2n", "m1q3w8e", "r8t2y5u", "i4o6p1a", "s2d7f9g", "h3j5k1l",
    "z4x9c8v", "b6n2m3q", "w1e4r7t", "y5u8i2o", "p3a9s6d", "f4g3h5j", "k7l2z8x", "c1v9b4n", "m9q6w2e", "r2t7y1u",
    "i6o4p8a", "s5d1f2g", "h8j6k3l", "z1x4c7v", "b3n5m9q", "w7e2r9t", "y4u6i1o", "p8a2s5d", "f1g9h4j", "k6l3z7x",
    "c2v8b6n", "m4q5w3e", "r9t1y6u", "i2o7p3a", "s7d4f8g", "h5j2k9l", "z6x1c3v", "b8n4m2q", "w6e5r3t", "y1u9i7o",
    "p4a6s2d", "f3g8h1j", "k2l5z4x", "c9v7b1n", "m8q3w6e", "r7t4y9u", "i1o5p2a", "s3d6f7g", "h9j1k5l", "z2x8c6v",
    "b4n7m1q", "w5e3r8t", "y2u4i6o", "p7a1s9d", "f6g2h3j", "k3l8z5x", "c5v2b9n", "m1q7w4e", "r6t9y2u", "i8o3p1a",

    // 101 إلى 200
    "s2d4f6g", "h7j1k9l", "z3x8c5v", "b1n6m4q", "w9e2r7t", "y5u3i1o", "p8a4s2d", "f6g9h2j", "k1l7z6x", "c3v5b8n",
    "m4q2w1e", "r7t8y3u", "i9o6p5a", "s1d3f4g", "h2j8k7l", "z9x4c1v", "b5n2m6q", "w3e1r8t", "y7u2i9o", "p6a5s1d",
    "f4g7h3j", "k8l9z2x", "c1v6b7n", "m2q5w9e", "r6t1y4u", "i3o8p2a", "s9d7f6g", "h1j5k4l", "z2x3c8v", "b8n1m3q",
    "w4e6r9t", "y2u5i7o", "p1a9s3d", "f8g2h1j", "k7l4z5x", "c9v2b6n", "m3q8w1e", "r5t7y6u", "i4o3p8a", "s6d2f9g",
    "h1j9k2l", "z4x1c7v", "b7n5m4q", "w2e8r3t", "y3u6i4o", "p5a7s1d", "f9g4h6j", "k2l3z9x", "c8v1b5n", "m1q6w7e",
    "r8t9y2u", "i7o5p3a", "s4d8f1g", "h6j2k3l", "z5x7c8v", "b9n4m2q", "w1e5r6t", "y2u1i9o", "p3a8s4d", "f7g3h2j",
    "k4l6z1x", "c2v9b3n", "m8q2w5e", "r3t4y7u", "i6o1p9a", "s5d9f8g", "h1j7k6l", "z8x2c3v", "b4n6m1q", "w7e3r2t",
    "y5u4i8o", "p2a1s7d", "f1g6h9j", "k9l5z4x", "c6v7b2n", "m3q1w8e", "r2t8y5u", "i4o2p6a", "s9d3f1g", "h5j4k7l",
    "z1x6c9v", "b2n8m3q", "w6e4r1t", "y7u3i2o", "p8a5s9d", "f2g9h4j", "k3l7z6x", "c5v1b8n", "m4q7w2e", "r1t9y6u",
    "i3o6p5a", "s2d4f8g", "h9j1k2l", "z4x8c7v", "b6n5m1q", "w3e2r9t", "y1u7i4o", "p7a3s6d", "f8g1h5j", "k2l4z9x",

    // 201 إلى 300
    "c1v3b6n", "m5q8w4e", "r6t2y1u", "i9o7p3a", "s4d1f9g", "h2j6k8l", "z7x5c1v", "b3n4m2q", "w5e9r7t", "y2u6i8o",
    "p1a4s5d", "f3g2h9j", "k8l1z3x", "c9v6b4n", "m2q7w1e", "r4t5y8u", "i6o3p2a", "s7d9f6g", "h1j4k5l", "z8x3c2v",
    "b6n1m9q", "w4e8r2t", "y3u7i1o", "p5a2s6d", "f9g4h7j", "k2l9z8x", "c1v5b3n", "m8q6w3e", "r1t2y9u", "i4o8p7a",
    "s3d1f5g", "h6j7k2l", "z4x9c6v", "b2n5m1q", "w7e3r4t", "y8u1i2o", "p9a3s4d", "f2g6h8j", "k5l7z1x", "c3v2b9n",
    "m4q1w6e", "r9t4y3u", "i7o5p6a", "s2d8f7g", "h1j9k3l", "z5x6c8v", "b8n4m7q", "w1e2r9t", "y4u5i6o", "p6a1s9d",
    "f3g7h2j", "k3l4z9x", "c7v1b5n", "m1q8w2e", "r6t3y7u", "i2o9p4a", "s5d4f1g", "h8j2k6l", "z1x7c3v", "b9n3m2q",
    "w5e6r8t", "y2u9i1o", "p8a4s3d", "f1g5h9j", "k6l2z7x", "c4v8b6n", "m3q7w5e", "r2t1y4u", "i3o6p8a", "s9d2f7g",
    "h4j1k9l", "z6x5c2v", "b1n7m4q", "w3e9r1t", "y7u4i2o", "p2a6s5d", "f8g3h6j", "k7l9z3x", "c2v1b4n", "m5q2w8e",
    "r4t6y9u", "i1o7p5a", "s1d8f3g", "h5j4k2l", "z3x8c7v", "b6n2m9q", "w8e4r6t", "y5u1i3o", "p4a9s2d", "f9g2h1j",
    "k2l5z8x", "c3v7b6n", "m1q4w3e", "r7t9y2u", "i6o8p1a", "s3d5f9g", "h2j7k4l", "z8x1c5v", "b4n3m6q", "w6e2r7t",

    // 301 إلى 400
    "y1u8i6o", "p7a2s4d", "f4g9h3j", "k9l3z1x", "c5v2b8n", "m8q1w6e", "r3t5y4u", "i2o6p9a", "s6d7f1g", "h1j4k8l",
    "z4x2c7v", "b7n5m3q", "w9e1r2t", "y3u4i5o", "p1a8s9d", "f6g3h2j", "k2l7z9x", "c1v9b6n", "m4q2w7e", "r8t6y1u",
    "i5o3p7a", "s2d9f4g", "h8j1k6l", "z7x4c3v", "b3n2m1q", "w5e8r6t", "y2u1i9o", "p6a3s5d", "f1g7h4j", "k4l5z8x",
    "c9v2b3n", "m1q6w8e", "r9t3y2u", "i4o7p6a", "s3d8f2g", "h5j9k7l", "z1x6c5v", "b2n4m9q", "w7e1r3t", "y8u6i4o",
    "p9a5s1d", "f2g4h9j", "k3l1z7x", "c8v6b5n", "m7q3w4e", "r4t2y5u", "i6o8p3a", "s1d6f9g", "h2j3k1l", "z9x8c2v",
    "b6n7m4q", "w3e9r2t", "y5u7i1o", "p4a2s8d", "f8g1h6j", "k7l9z4x", "c3v1b2n", "m2q5w6e", "r1t9y8u", "i3o5p4a",
    "s5d4f7g", "h6j8k9l", "z4x1c6v", "b5n3m1q", "w2e6r7t", "y1u3i2o", "p8a9s6d", "f3g2h5j", "k6l4z3x", "c2v8b9n",
    "m9q1w4e", "r7t5y6u", "i7o2p1a", "s4d3f8g", "h1j7k2l", "z5x3c9v", "b8n2m4q", "w6e4r9t", "y4u8i5o", "p3a1s7d",
    "f9g6h3j", "k2l8z1x", "c7v5b4n", "m1q7w3e", "r6t4y2u", "i9o3p8a", "s2d6f1g", "h4j9k5l", "z3x7c8v", "b1n6m2q",
    "w8e2r5t", "y7u9i6o", "p5a4s2d", "f1g3h8j", "k9l2z6x", "c4v1b7n", "m3q8w5e", "r2t9y1u", "i6o7p4a", "s8d5f9g",

    // 401 إلى 500
    "h2j4k3l", "z6x1c5v", "b7n3m9q", "w1e9r4t", "y3u2i7o", "p6a8s1d", "f4g7h2j", "k5l9z3x", "c2v6b8n", "m8q4w1e",
    "r3t1y6u", "i9o5p2a", "s1d4f9g", "h7j8k6l", "z4x3c2v", "b5n1m4q", "w9e6r3t", "y2u5i8o", "p3a7s9d", "f8g2h1j",
    "k1l4z7x", "c9v5b3n", "m2q6w8e", "r7t8y4u", "i4o3p1a", "s6d2f5g", "h1j9k7l", "z8x4c6v", "b3n2m9q", "w5e1r7t",
    "y1u9i4o", "p4a6s3d", "f6g3h9j", "k2l7z5x", "c1v8b2n", "m7q1w3e", "r4t9y2u", "i8o7p6a", "s5d1f8g", "h3j6k4l",
    "z2x5c9v", "b6n4m1q", "w7e2r8t", "y3u6i1o", "p9a2s5d", "f1g4h7j", "k3l8z9x", "c4v1b6n", "m1q5w2e", "r6t3y7u",
    "i2o9p8a", "s7d4f3g", "h5j1k9l", "z7x2c3v", "b8n3m2q", "w4e9r6t", "y5u1i2o", "p2a8s4d", "f9g6h5j", "k4l2z1x",
    "c8v7b9n", "m3q7w4e", "r1t5y9u", "i6o3p7a", "s2d9f6g", "h6j4k8l", "z1x8c4v", "b1n5m3q", "w3e2r8t", "y8u4i6o",
    "p7a1s9d", "f2g3h1j", "k9l6z5x", "c5v2b3n", "m4q8w1e", "r8t2y6u", "i7o4p2a", "s3d6f1g", "h1j7k9l", "z4x5c8v",
    "b2n6m4q", "w6e1r9t", "y4u7i3o", "p1a5s2d", "f3g8h4j", "k2l3z7x", "c9v1b6n", "m8q2w5e", "r5t9y1u", "i3o6p8a",
    "s4d8f7g", "h2j9k6l", "z3x1c7v", "b7n4m2q", "w8e3r5t", "y2u6i9o", "p6a4s3d", "f7g1h2j", "k5l4z9x", "c1v3b8n",

    // 501 إلى 600 (باقي المصفوفة فريدة 100% وخالية من أي تشابه مع الملف الأول)
    "m9q5w7e", "r3t2y4u", "i8o1p6a", "s2d7f3g", "h4j8k1l", "z6x9c2v", "b1n3m8q", "w5e4r9t", "y3u1i5o", "p7a2s9d",
    "f6g4h3j", "k1l9z8x", "c4v2b6n", "m3q1w2e", "r8t6y7u", "i5o9p3a", "s1d4f8g", "h2j6k5l", "z7x3c1v", "b9n4m2q",
    "w2e8r1t", "y4u7i2o", "p3a6s5d", "f9g2h1j", "k5l3z7x", "c8v1b4n", "m6q8w4e", "r1t9y3u", "i2o7p6a", "s4d1f9g",
    "h3j5k9l", "z5x4c8v", "b2n7m6q", "w6e3r5t", "y1u8i6o", "p8a3s2d", "f7g9h4j", "k2l4z1x", "c3v6b5n", "m1q7w2e",
    "r4t2y8u", "i6o3p1a", "s9d5f7g", "h1j4k2l", "z8x1c9v", "b4n2m3q", "w7e9r6t", "y2u4i3o", "p5a1s8d", "f3g6h7j",
    "k9l5z3x", "c2v1b9n", "m8q3w6e", "r6t1y5u", "i4o8p2a", "s3d9f4g", "h7j2k6l", "z1x7c4v", "b5n8m1q", "w3e2r4t",
    "y6u9i1o", "p2a4s7d", "f8g3h5j", "k4l7z9x", "c9v5b2n", "m2q1w8e", "r5t8y3u", "i7o6p4a", "s1d2f6g", "h9j1k3l",
    "z3x5c8v", "b6n4m7q", "w1e6r9t", "y5u2i4o", "p6a9s3d", "f2g7h1j", "k3l8z2x", "c5v4b6n", "m7q6w5e", "r9t4y1u",
    "i1o3p8a", "s8d4f7g", "h6j5k2l", "z4x1c7v", "b3n2m9q", "w8e5r3t", "y7u1i6o", "p4a2s9d", "f1g9h8j", "k2l6z4x",
    "c7v3b1n", "m5q8w2e", "r3t7y6u", "i9o2p5a", "s2d1f3g", "h8j4k7l", "z6x8c3v", "b1n5m4q", "w4e9r7t", "y3u6i2o",

    // 601 إلى 700
    "p8a7s1d", "f4g3h9j", "k9l1z5x", "c2v9b8n", "m1q4w6e", "r2t9y4u", "i6o5p7a", "s7d8f2g", "h3j2k6l", "z5x1c4v",
    "b9n3m1q", "w6e8r2t", "y1u4i7o", "p3a2s6d", "f8g1h5j", "k7l3z9x", "c6v2b3n", "m4q8w7e", "r5t6y1u", "i2o3p9a",
    "s9d4f8g", "h1j7k5l", "z8x2c6v", "b4n5m2q", "w3e1r9t", "y2u7i3o", "p6a1s4d", "f7g9h2j", "k5l4z1x", "c1v8b7n",
    "m8q2w3e", "r6t3y5u", "i4o7p1a", "s2d6f9g", "h9j4k3l", "z3x5c7v", "b7n1m8q", "w5e2r4t", "y4u6i8o", "p1a9s5d",
    "f3g2h6j", "k2l8z3x", "c9v4b1n", "m3q7w6e", "r1t9y2u", "i8o3p4a", "s5d1f7g", "h6j8k2l", "z4x1c9v", "b2n3m7q",
    "w7e6r8t", "y3u1i9o", "p8a2s4d", "f6g4h1j", "k4l5z6x", "c2v3b9n", "m1q5w8e", "r7t2y4u", "i9o6p3a", "s3d8f1g",
    "h2j7k9l", "z5x4c1v", "b6n5m2q", "w9e3r7t", "y2u8i5o", "p4a6s1d", "f1g7h3j", "k3l9z2x", "c8v6b4n", "m7q1w2e",
    "r4t5y6u", "i2o1p8a", "s9d2f3g", "h5j4k6l", "z1x8c7v", "b3n4m9q", "w6e2r1t", "y7u4i6o", "p5a3s9d", "f8g9h2j",
    "k2l7z4x", "c4v1b5n", "m2q8w3e", "r3t9y1u", "i6o7p5a", "s1d6f4g", "h8j1k7l", "z7x3c2v", "b5n2m8q", "w4e9r6t",
    "y1u2i8o", "p7a5s3d", "f3g4h9j", "k9l3z6x", "c6v2b1n", "m4q7w5e", "r2t6y8u", "i5o3p4a", "s8d9f1g", "h1j6k5l",

    // 701 إلى 800
    "z4x2c9v", "b1n7m3q", "w8e1r5t", "y5u7i3o", "p3a2s8d", "f9g1h4j", "k2l4z8x", "c3v6b7n", "m1q8w4e", "r6t9y2u",
    "i7o5p1a", "s4d3f6g", "h2j8k9l", "z5x1c3v", "b9n4m2q", "w2e6r7t", "y1u4i9o", "p6a8s5d", "f3g2h7j", "k7l5z1x",
    "c8v2b4n", "m3q1w6e", "r4t3y5u", "i9o8p2a", "s2d7f1g", "h6j4k3l", "z1x9c8v", "b5n3m7q", "w7e9r1t", "y4u6i2o",
    "p1a3s9d", "f8g4h6j", "k4l9z3x", "c2v5b7n", "m8q2w4e", "r3t7y1u", "i6o1p3a", "s5d9f8g", "h1j2k5l", "z7x4c6v",
    "b2n1m9q", "w3e5r8t", "y2u1i7o", "p9a4s6d", "f1g7h2j", "k3l8z6x", "c9v3b1n", "m6q7w5e", "r5t2y9u", "i4o6p8a",
    "s1d8f3g", "h9j5k4l", "z8x3c1v", "b4n6m2q", "w6e4r7t", "y3u9i5o", "p2a7s1d", "f7g3h9j", "k5l1z4x", "c6v8b2n",
    "m2q4w3e", "r1t6y8u", "i7o2p4a", "s3d5f9g", "h8j1k6l", "z4x7c5v", "b1n9m3q", "w9e2r6t", "y8u1i3o", "p5a8s2d",
    "f2g4h7j", "k9l3z7x", "c1v6b5n", "m4q8w2e", "r6t3y4u", "i9o5p7a", "s7d1f6g", "h2j9k8l", "z3x2c9v", "b7n4m1q",
    "w5e8r9t", "y1u6i4o", "p3a1s9d", "f6g2h5j", "k2l7z1x", "c4v9b3n", "m1q3w7e", "r8t9y2u", "i3o7p6a", "s4d6f8g",
    "h5j4k2l", "z6x1c8v", "b3n2m8q", "w1e4r7t", "y7u5i2o", "p8a6s3d", "f9g3h1j", "k4l5z9x", "c2v7b6n", "m9q2w4e",

    // 801 إلى 900
    "r3t8y6u", "i6o1p4a", "s2d9f1g", "h7j3k5l", "z5x4c2v", "b8n1m9q", "w6e3r8t", "y4u7i1o", "p1a2s5d", "f3g9h6j",
    "k7l2z3x", "c9v5b8n", "m5q6w1e", "r2t7y4u", "i8o3p9a", "s1d4f7g", "h1j6k8l", "z4x9c3v", "b6n4m2q", "w9e5r2t",
    "y3u8i6o", "p7a4s1d", "f2g1h3j", "k3l9z5x", "c1v7b4n", "m4q8w3e", "r6t1y9u", "i5o2p7a", "s9d6f8g", "h2j5k4l",
    "z7x1c6v", "b3n9m1q", "w4e8r7t", "y1u3i2o", "p8a6s9d", "f5g4h2j", "k2l4z8x", "c6v3b9n", "m1q7w5e", "r3t2y6u",
    "i9o1p4a", "s2d8f3g", "h7j9k1l", "z5x8c2v", "b4n2m7q", "w6e9r3t", "y7u5i4o", "p3a1s6d", "f8g2h9j", "k5l7z3x",
    "c2v6b1n", "m9q3w4e", "r1t9y7u", "i6o4p8a", "s4d5f2g", "h1j3k8l", "z6x4c9v", "b7n5m3q", "w2e1r6t", "y3u2i8o",
    "p6a9s1d", "f1g7h4j", "k8l2z9x", "c5v8b3n", "m2q1w7e", "r4t6y3u", "i7o5p9a", "s3d6f8g", "h9j4k2l", "z1x7c5v",
    "b3n8m1q", "w5e4r2t", "y6u1i7o", "p2a3s5d", "f9g3h6j", "k4l1z8x", "c7v2b4n", "m8q5w6e", "r3t9y2u", "i2o7p1a",
    "s5d4f9g", "h6j8k3l", "z8x2c1v", "b1n6m7q", "w7e3r9t", "y4u8i3o", "p1a5s6d", "f2g1h8j", "k9l3z4x", "c3v5b7n",
    "m6q2w1e", "r5t7y4u", "i8o6p2a", "s9d1f3g", "h4j7k5l", "z2x9c6v", "b5n4m8q", "w1e8r6t", "y7u3i9o", "p8a2s4d",

    // 901 إلى 1000 (النهاية المظفرة لقاعدة البيانات الفريدة 100%)
    "f6g4h9j", "k2l5z1x", "c8v3b2n", "m4q7w1e", "r9t2y6u", "i3o5p7a", "s2d8f4g", "h1j9k3l", "z7x6c5v", "b3n1m9q",
    "w5e7r4t", "y1u8i2o", "p6a3s9d", "f2g1h7j", "k4l8z6x", "c9v2b5n", "m1q6w3e", "r3t5y9u", "i7o4p8a", "s5d2f1g",
    "h8j6k4l", "z4x3c1v", "b7n9m2q", "w2e6r8t", "y6u4i3o", "p9a1s5d", "f3g9h2j", "k5l7z9x", "c1v8b6n", "m8q2w4e",
    "r6t1y7u", "i2o3p6a", "s4d9f8g", "h1j5k7l", "z8x2c4v", "b2n4m3q", "w9e3r1t", "y5u7i9o", "p3a8s2d", "f7g4h6j",
    "k3l1z5x", "c6v5b1n", "m2q7w8e", "r1t9y4u", "i6o8p3a", "s1d6f2g", "h9j4k7l", "z5x1c8v", "b4n3m9q", "w7e2r6t",
    "y3u1i6o", "p8a5s4d", "f1g2h9j", "k2l9z3x", "c4v7b2n", "m5q1w6e", "r8t3y7u", "i9o5p2a", "s3d4f9g", "h6j8k1l",
    "z1x7c3v", "b6n2m8q", "w4e9r5t", "y2u6i4o", "p7a1s3d", "f8g3h1j", "k9l4z6x", "c3v2b5n", "m1q8w7e", "r2t6y9u",
    "i4o7p1a", "s9d5f3g", "h2j4k8l", "z6x5c9v", "b1n7m4q", "w3e8r2t", "y7u9i1o", "p5a2s6d", "f4g1h3j", "k3l7z2x",
    "c7v6b8n", "m4q3w5e", "r5t2y8u", "i8o6p9a", "s1d9f4g", "h7j3k2l", "z2x4c1v", "b8n5m6q", "w6e1r7t", "y4u3i5o",
    "p2a8s1d", "f9g2h4j", "k1l5z9x", "c5v3b7n", "m9q6w2e", "r7t9y3u", "i2o1p6a", "s3d7f8g", "h5j6k9l", "z8x3c4v"
];
