import calc from './'



test("89000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 88001
    }
    expect(calc(options)).toBe(130)
})

test("89000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 88001
    }
    expect(calc(options)).toBe(0)
})

test("89000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 88001
    }
    expect(calc(options)).toBe(0)
})

test("89000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 88001
    }
    expect(calc(options)).toBe(0)
})

test("89000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 88001
    }
    expect(calc(options)).toBe(0)
})

test("89000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 88001
    }
    expect(calc(options)).toBe(0)
})

test("89000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 88001
    }
    expect(calc(options)).toBe(0)
})

test("89000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 88001
    }
    expect(calc(options)).toBe(0)
})

test("89000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 88001
    }
    expect(calc(options)).toBe(3200)
})

test("90000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 89001
    }
    expect(calc(options)).toBe(180)
})

test("90000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 89001
    }
    expect(calc(options)).toBe(0)
})

test("90000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 89001
    }
    expect(calc(options)).toBe(0)
})

test("90000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 89001
    }
    expect(calc(options)).toBe(0)
})

test("90000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 89001
    }
    expect(calc(options)).toBe(0)
})

test("90000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 89001
    }
    expect(calc(options)).toBe(0)
})

test("90000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 89001
    }
    expect(calc(options)).toBe(0)
})

test("90000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 89001
    }
    expect(calc(options)).toBe(0)
})

test("90000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 89001
    }
    expect(calc(options)).toBe(3200)
})

test("91000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 90001
    }
    expect(calc(options)).toBe(230)
})

test("91000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 90001
    }
    expect(calc(options)).toBe(0)
})

test("91000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 90001
    }
    expect(calc(options)).toBe(0)
})

test("91000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 90001
    }
    expect(calc(options)).toBe(0)
})

test("91000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 90001
    }
    expect(calc(options)).toBe(0)
})

test("91000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 90001
    }
    expect(calc(options)).toBe(0)
})

test("91000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 90001
    }
    expect(calc(options)).toBe(0)
})

test("91000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 90001
    }
    expect(calc(options)).toBe(0)
})

test("91000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 90001
    }
    expect(calc(options)).toBe(3200)
})

test("92000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 91001
    }
    expect(calc(options)).toBe(290)
})

test("92000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 91001
    }
    expect(calc(options)).toBe(0)
})

test("92000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 91001
    }
    expect(calc(options)).toBe(0)
})

test("92000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 91001
    }
    expect(calc(options)).toBe(0)
})

test("92000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 91001
    }
    expect(calc(options)).toBe(0)
})

test("92000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 91001
    }
    expect(calc(options)).toBe(0)
})

test("92000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 91001
    }
    expect(calc(options)).toBe(0)
})

test("92000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 91001
    }
    expect(calc(options)).toBe(0)
})

test("92000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 91001
    }
    expect(calc(options)).toBe(3200)
})

test("93000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 92001
    }
    expect(calc(options)).toBe(340)
})

test("93000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 92001
    }
    expect(calc(options)).toBe(0)
})

test("93000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 92001
    }
    expect(calc(options)).toBe(0)
})

test("93000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 92001
    }
    expect(calc(options)).toBe(0)
})

test("93000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 92001
    }
    expect(calc(options)).toBe(0)
})

test("93000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 92001
    }
    expect(calc(options)).toBe(0)
})

test("93000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 92001
    }
    expect(calc(options)).toBe(0)
})

test("93000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 92001
    }
    expect(calc(options)).toBe(0)
})

test("93000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 92001
    }
    expect(calc(options)).toBe(3300)
})

test("94000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 93001
    }
    expect(calc(options)).toBe(390)
})

test("94000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 93001
    }
    expect(calc(options)).toBe(0)
})

test("94000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 93001
    }
    expect(calc(options)).toBe(0)
})

test("94000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 93001
    }
    expect(calc(options)).toBe(0)
})

test("94000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 93001
    }
    expect(calc(options)).toBe(0)
})

test("94000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 93001
    }
    expect(calc(options)).toBe(0)
})

test("94000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 93001
    }
    expect(calc(options)).toBe(0)
})

test("94000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 93001
    }
    expect(calc(options)).toBe(0)
})

test("94000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 93001
    }
    expect(calc(options)).toBe(3300)
})

test("95000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 94001
    }
    expect(calc(options)).toBe(440)
})

test("95000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 94001
    }
    expect(calc(options)).toBe(0)
})

test("95000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 94001
    }
    expect(calc(options)).toBe(0)
})

test("95000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 94001
    }
    expect(calc(options)).toBe(0)
})

test("95000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 94001
    }
    expect(calc(options)).toBe(0)
})

test("95000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 94001
    }
    expect(calc(options)).toBe(0)
})

test("95000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 94001
    }
    expect(calc(options)).toBe(0)
})

test("95000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 94001
    }
    expect(calc(options)).toBe(0)
})

test("95000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 94001
    }
    expect(calc(options)).toBe(3300)
})

test("96000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 95001
    }
    expect(calc(options)).toBe(490)
})

test("96000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 95001
    }
    expect(calc(options)).toBe(0)
})

test("96000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 95001
    }
    expect(calc(options)).toBe(0)
})

test("96000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 95001
    }
    expect(calc(options)).toBe(0)
})

test("96000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 95001
    }
    expect(calc(options)).toBe(0)
})

test("96000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 95001
    }
    expect(calc(options)).toBe(0)
})

test("96000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 95001
    }
    expect(calc(options)).toBe(0)
})

test("96000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 95001
    }
    expect(calc(options)).toBe(0)
})

test("96000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 95001
    }
    expect(calc(options)).toBe(3400)
})

test("97000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 96001
    }
    expect(calc(options)).toBe(540)
})

test("97000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 96001
    }
    expect(calc(options)).toBe(0)
})

test("97000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 96001
    }
    expect(calc(options)).toBe(0)
})

test("97000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 96001
    }
    expect(calc(options)).toBe(0)
})

test("97000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 96001
    }
    expect(calc(options)).toBe(0)
})

test("97000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 96001
    }
    expect(calc(options)).toBe(0)
})

test("97000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 96001
    }
    expect(calc(options)).toBe(0)
})

test("97000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 96001
    }
    expect(calc(options)).toBe(0)
})

test("97000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 96001
    }
    expect(calc(options)).toBe(3400)
})

test("98000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 97001
    }
    expect(calc(options)).toBe(590)
})

test("98000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 97001
    }
    expect(calc(options)).toBe(0)
})

test("98000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 97001
    }
    expect(calc(options)).toBe(0)
})

test("98000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 97001
    }
    expect(calc(options)).toBe(0)
})

test("98000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 97001
    }
    expect(calc(options)).toBe(0)
})

test("98000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 97001
    }
    expect(calc(options)).toBe(0)
})

test("98000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 97001
    }
    expect(calc(options)).toBe(0)
})

test("98000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 97001
    }
    expect(calc(options)).toBe(0)
})

test("98000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 97001
    }
    expect(calc(options)).toBe(3500)
})

test("99000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 98001
    }
    expect(calc(options)).toBe(640)
})

test("99000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 98001
    }
    expect(calc(options)).toBe(0)
})

test("99000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 98001
    }
    expect(calc(options)).toBe(0)
})

test("99000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 98001
    }
    expect(calc(options)).toBe(0)
})

test("99000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 98001
    }
    expect(calc(options)).toBe(0)
})

test("99000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 98001
    }
    expect(calc(options)).toBe(0)
})

test("99000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 98001
    }
    expect(calc(options)).toBe(0)
})

test("99000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 98001
    }
    expect(calc(options)).toBe(0)
})

test("99000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 98001
    }
    expect(calc(options)).toBe(3500)
})

test("101000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 99001
    }
    expect(calc(options)).toBe(720)
})

test("101000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 99001
    }
    expect(calc(options)).toBe(0)
})

test("101000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 99001
    }
    expect(calc(options)).toBe(0)
})

test("101000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 99001
    }
    expect(calc(options)).toBe(0)
})

test("101000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 99001
    }
    expect(calc(options)).toBe(0)
})

test("101000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 99001
    }
    expect(calc(options)).toBe(0)
})

test("101000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 99001
    }
    expect(calc(options)).toBe(0)
})

test("101000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 99001
    }
    expect(calc(options)).toBe(0)
})

test("101000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 99001
    }
    expect(calc(options)).toBe(3600)
})

test("103000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 101001
    }
    expect(calc(options)).toBe(830)
})

test("103000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 101001
    }
    expect(calc(options)).toBe(0)
})

test("103000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 101001
    }
    expect(calc(options)).toBe(0)
})

test("103000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 101001
    }
    expect(calc(options)).toBe(0)
})

test("103000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 101001
    }
    expect(calc(options)).toBe(0)
})

test("103000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 101001
    }
    expect(calc(options)).toBe(0)
})

test("103000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 101001
    }
    expect(calc(options)).toBe(0)
})

test("103000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 101001
    }
    expect(calc(options)).toBe(0)
})

test("103000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 101001
    }
    expect(calc(options)).toBe(3600)
})

test("105000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 103001
    }
    expect(calc(options)).toBe(930)
})

test("105000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 103001
    }
    expect(calc(options)).toBe(0)
})

test("105000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 103001
    }
    expect(calc(options)).toBe(0)
})

test("105000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 103001
    }
    expect(calc(options)).toBe(0)
})

test("105000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 103001
    }
    expect(calc(options)).toBe(0)
})

test("105000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 103001
    }
    expect(calc(options)).toBe(0)
})

test("105000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 103001
    }
    expect(calc(options)).toBe(0)
})

test("105000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 103001
    }
    expect(calc(options)).toBe(0)
})

test("105000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 103001
    }
    expect(calc(options)).toBe(3700)
})

test("107000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 105001
    }
    expect(calc(options)).toBe(1030)
})

test("107000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 105001
    }
    expect(calc(options)).toBe(0)
})

test("107000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 105001
    }
    expect(calc(options)).toBe(0)
})

test("107000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 105001
    }
    expect(calc(options)).toBe(0)
})

test("107000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 105001
    }
    expect(calc(options)).toBe(0)
})

test("107000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 105001
    }
    expect(calc(options)).toBe(0)
})

test("107000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 105001
    }
    expect(calc(options)).toBe(0)
})

test("107000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 105001
    }
    expect(calc(options)).toBe(0)
})

test("107000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 105001
    }
    expect(calc(options)).toBe(3800)
})

test("109000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 107001
    }
    expect(calc(options)).toBe(1130)
})

test("109000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 107001
    }
    expect(calc(options)).toBe(0)
})

test("109000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 107001
    }
    expect(calc(options)).toBe(0)
})

test("109000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 107001
    }
    expect(calc(options)).toBe(0)
})

test("109000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 107001
    }
    expect(calc(options)).toBe(0)
})

test("109000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 107001
    }
    expect(calc(options)).toBe(0)
})

test("109000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 107001
    }
    expect(calc(options)).toBe(0)
})

test("109000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 107001
    }
    expect(calc(options)).toBe(0)
})

test("109000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 107001
    }
    expect(calc(options)).toBe(3800)
})

test("111000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 109001
    }
    expect(calc(options)).toBe(1240)
})

test("111000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 109001
    }
    expect(calc(options)).toBe(0)
})

test("111000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 109001
    }
    expect(calc(options)).toBe(0)
})

test("111000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 109001
    }
    expect(calc(options)).toBe(0)
})

test("111000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 109001
    }
    expect(calc(options)).toBe(0)
})

test("111000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 109001
    }
    expect(calc(options)).toBe(0)
})

test("111000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 109001
    }
    expect(calc(options)).toBe(0)
})

test("111000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 109001
    }
    expect(calc(options)).toBe(0)
})

test("111000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 109001
    }
    expect(calc(options)).toBe(3900)
})

test("113000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 111001
    }
    expect(calc(options)).toBe(1340)
})

test("113000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 111001
    }
    expect(calc(options)).toBe(0)
})

test("113000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 111001
    }
    expect(calc(options)).toBe(0)
})

test("113000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 111001
    }
    expect(calc(options)).toBe(0)
})

test("113000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 111001
    }
    expect(calc(options)).toBe(0)
})

test("113000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 111001
    }
    expect(calc(options)).toBe(0)
})

test("113000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 111001
    }
    expect(calc(options)).toBe(0)
})

test("113000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 111001
    }
    expect(calc(options)).toBe(0)
})

test("113000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 111001
    }
    expect(calc(options)).toBe(4000)
})

test("115000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 113001
    }
    expect(calc(options)).toBe(1440)
})

test("115000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 113001
    }
    expect(calc(options)).toBe(0)
})

test("115000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 113001
    }
    expect(calc(options)).toBe(0)
})

test("115000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 113001
    }
    expect(calc(options)).toBe(0)
})

test("115000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 113001
    }
    expect(calc(options)).toBe(0)
})

test("115000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 113001
    }
    expect(calc(options)).toBe(0)
})

test("115000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 113001
    }
    expect(calc(options)).toBe(0)
})

test("115000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 113001
    }
    expect(calc(options)).toBe(0)
})

test("115000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 113001
    }
    expect(calc(options)).toBe(4100)
})

test("117000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 115001
    }
    expect(calc(options)).toBe(1540)
})

test("117000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 115001
    }
    expect(calc(options)).toBe(0)
})

test("117000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 115001
    }
    expect(calc(options)).toBe(0)
})

test("117000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 115001
    }
    expect(calc(options)).toBe(0)
})

test("117000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 115001
    }
    expect(calc(options)).toBe(0)
})

test("117000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 115001
    }
    expect(calc(options)).toBe(0)
})

test("117000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 115001
    }
    expect(calc(options)).toBe(0)
})

test("117000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 115001
    }
    expect(calc(options)).toBe(0)
})

test("117000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 115001
    }
    expect(calc(options)).toBe(4100)
})

test("119000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 117001
    }
    expect(calc(options)).toBe(1640)
})

test("119000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 117001
    }
    expect(calc(options)).toBe(0)
})

test("119000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 117001
    }
    expect(calc(options)).toBe(0)
})

test("119000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 117001
    }
    expect(calc(options)).toBe(0)
})

test("119000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 117001
    }
    expect(calc(options)).toBe(0)
})

test("119000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 117001
    }
    expect(calc(options)).toBe(0)
})

test("119000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 117001
    }
    expect(calc(options)).toBe(0)
})

test("119000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 117001
    }
    expect(calc(options)).toBe(0)
})

test("119000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 117001
    }
    expect(calc(options)).toBe(4200)
})

test("121000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 119001
    }
    expect(calc(options)).toBe(1750)
})

test("121000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 119001
    }
    expect(calc(options)).toBe(120)
})

test("121000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 119001
    }
    expect(calc(options)).toBe(0)
})

test("121000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 119001
    }
    expect(calc(options)).toBe(0)
})

test("121000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 119001
    }
    expect(calc(options)).toBe(0)
})

test("121000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 119001
    }
    expect(calc(options)).toBe(0)
})

test("121000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 119001
    }
    expect(calc(options)).toBe(0)
})

test("121000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 119001
    }
    expect(calc(options)).toBe(0)
})

test("121000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 119001
    }
    expect(calc(options)).toBe(4300)
})

test("123000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 121001
    }
    expect(calc(options)).toBe(1850)
})

test("123000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 121001
    }
    expect(calc(options)).toBe(220)
})

test("123000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 121001
    }
    expect(calc(options)).toBe(0)
})

test("123000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 121001
    }
    expect(calc(options)).toBe(0)
})

test("123000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 121001
    }
    expect(calc(options)).toBe(0)
})

test("123000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 121001
    }
    expect(calc(options)).toBe(0)
})

test("123000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 121001
    }
    expect(calc(options)).toBe(0)
})

test("123000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 121001
    }
    expect(calc(options)).toBe(0)
})

test("123000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 121001
    }
    expect(calc(options)).toBe(4500)
})

test("125000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 123001
    }
    expect(calc(options)).toBe(1950)
})

test("125000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 123001
    }
    expect(calc(options)).toBe(330)
})

test("125000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 123001
    }
    expect(calc(options)).toBe(0)
})

test("125000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 123001
    }
    expect(calc(options)).toBe(0)
})

test("125000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 123001
    }
    expect(calc(options)).toBe(0)
})

test("125000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 123001
    }
    expect(calc(options)).toBe(0)
})

test("125000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 123001
    }
    expect(calc(options)).toBe(0)
})

test("125000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 123001
    }
    expect(calc(options)).toBe(0)
})

test("125000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 123001
    }
    expect(calc(options)).toBe(4800)
})

test("127000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 125001
    }
    expect(calc(options)).toBe(2050)
})

test("127000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 125001
    }
    expect(calc(options)).toBe(430)
})

test("127000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 125001
    }
    expect(calc(options)).toBe(0)
})

test("127000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 125001
    }
    expect(calc(options)).toBe(0)
})

test("127000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 125001
    }
    expect(calc(options)).toBe(0)
})

test("127000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 125001
    }
    expect(calc(options)).toBe(0)
})

test("127000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 125001
    }
    expect(calc(options)).toBe(0)
})

test("127000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 125001
    }
    expect(calc(options)).toBe(0)
})

test("127000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 125001
    }
    expect(calc(options)).toBe(5100)
})

test("129000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 127001
    }
    expect(calc(options)).toBe(2150)
})

test("129000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 127001
    }
    expect(calc(options)).toBe(530)
})

test("129000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 127001
    }
    expect(calc(options)).toBe(0)
})

test("129000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 127001
    }
    expect(calc(options)).toBe(0)
})

test("129000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 127001
    }
    expect(calc(options)).toBe(0)
})

test("129000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 127001
    }
    expect(calc(options)).toBe(0)
})

test("129000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 127001
    }
    expect(calc(options)).toBe(0)
})

test("129000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 127001
    }
    expect(calc(options)).toBe(0)
})

test("129000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 127001
    }
    expect(calc(options)).toBe(5400)
})

test("131000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 129001
    }
    expect(calc(options)).toBe(2260)
})

test("131000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 129001
    }
    expect(calc(options)).toBe(630)
})

test("131000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 129001
    }
    expect(calc(options)).toBe(0)
})

test("131000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 129001
    }
    expect(calc(options)).toBe(0)
})

test("131000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 129001
    }
    expect(calc(options)).toBe(0)
})

test("131000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 129001
    }
    expect(calc(options)).toBe(0)
})

test("131000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 129001
    }
    expect(calc(options)).toBe(0)
})

test("131000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 129001
    }
    expect(calc(options)).toBe(0)
})

test("131000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 129001
    }
    expect(calc(options)).toBe(5700)
})

test("133000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 131001
    }
    expect(calc(options)).toBe(2360)
})

test("133000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 131001
    }
    expect(calc(options)).toBe(740)
})

test("133000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 131001
    }
    expect(calc(options)).toBe(0)
})

test("133000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 131001
    }
    expect(calc(options)).toBe(0)
})

test("133000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 131001
    }
    expect(calc(options)).toBe(0)
})

test("133000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 131001
    }
    expect(calc(options)).toBe(0)
})

test("133000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 131001
    }
    expect(calc(options)).toBe(0)
})

test("133000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 131001
    }
    expect(calc(options)).toBe(0)
})

test("133000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 131001
    }
    expect(calc(options)).toBe(6000)
})

test("135000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 133001
    }
    expect(calc(options)).toBe(2460)
})

test("135000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 133001
    }
    expect(calc(options)).toBe(840)
})

test("135000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 133001
    }
    expect(calc(options)).toBe(0)
})

test("135000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 133001
    }
    expect(calc(options)).toBe(0)
})

test("135000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 133001
    }
    expect(calc(options)).toBe(0)
})

test("135000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 133001
    }
    expect(calc(options)).toBe(0)
})

test("135000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 133001
    }
    expect(calc(options)).toBe(0)
})

test("135000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 133001
    }
    expect(calc(options)).toBe(0)
})

test("135000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 133001
    }
    expect(calc(options)).toBe(6300)
})

test("137000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 135001
    }
    expect(calc(options)).toBe(2550)
})

test("137000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 135001
    }
    expect(calc(options)).toBe(930)
})

test("137000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 135001
    }
    expect(calc(options)).toBe(0)
})

test("137000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 135001
    }
    expect(calc(options)).toBe(0)
})

test("137000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 135001
    }
    expect(calc(options)).toBe(0)
})

test("137000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 135001
    }
    expect(calc(options)).toBe(0)
})

test("137000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 135001
    }
    expect(calc(options)).toBe(0)
})

test("137000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 135001
    }
    expect(calc(options)).toBe(0)
})

test("137000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 135001
    }
    expect(calc(options)).toBe(6600)
})

test("139000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 137001
    }
    expect(calc(options)).toBe(2610)
})

test("139000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 137001
    }
    expect(calc(options)).toBe(990)
})

test("139000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 137001
    }
    expect(calc(options)).toBe(0)
})

test("139000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 137001
    }
    expect(calc(options)).toBe(0)
})

test("139000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 137001
    }
    expect(calc(options)).toBe(0)
})

test("139000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 137001
    }
    expect(calc(options)).toBe(0)
})

test("139000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 137001
    }
    expect(calc(options)).toBe(0)
})

test("139000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 137001
    }
    expect(calc(options)).toBe(0)
})

test("139000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 137001
    }
    expect(calc(options)).toBe(6800)
})

test("141000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 139001
    }
    expect(calc(options)).toBe(2680)
})

test("141000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 139001
    }
    expect(calc(options)).toBe(1050)
})

test("141000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 139001
    }
    expect(calc(options)).toBe(0)
})

test("141000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 139001
    }
    expect(calc(options)).toBe(0)
})

test("141000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 139001
    }
    expect(calc(options)).toBe(0)
})

test("141000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 139001
    }
    expect(calc(options)).toBe(0)
})

test("141000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 139001
    }
    expect(calc(options)).toBe(0)
})

test("141000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 139001
    }
    expect(calc(options)).toBe(0)
})

test("141000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 139001
    }
    expect(calc(options)).toBe(7100)
})

test("143000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 141001
    }
    expect(calc(options)).toBe(2740)
})

test("143000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 141001
    }
    expect(calc(options)).toBe(1110)
})

test("143000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 141001
    }
    expect(calc(options)).toBe(0)
})

test("143000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 141001
    }
    expect(calc(options)).toBe(0)
})

test("143000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 141001
    }
    expect(calc(options)).toBe(0)
})

test("143000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 141001
    }
    expect(calc(options)).toBe(0)
})

test("143000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 141001
    }
    expect(calc(options)).toBe(0)
})

test("143000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 141001
    }
    expect(calc(options)).toBe(0)
})

test("143000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 141001
    }
    expect(calc(options)).toBe(7500)
})

test("145000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 143001
    }
    expect(calc(options)).toBe(2800)
})

test("145000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 143001
    }
    expect(calc(options)).toBe(1170)
})

test("145000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 143001
    }
    expect(calc(options)).toBe(0)
})

test("145000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 143001
    }
    expect(calc(options)).toBe(0)
})

test("145000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 143001
    }
    expect(calc(options)).toBe(0)
})

test("145000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 143001
    }
    expect(calc(options)).toBe(0)
})

test("145000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 143001
    }
    expect(calc(options)).toBe(0)
})

test("145000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 143001
    }
    expect(calc(options)).toBe(0)
})

test("145000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 143001
    }
    expect(calc(options)).toBe(7800)
})

test("147000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 145001
    }
    expect(calc(options)).toBe(2860)
})

test("147000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 145001
    }
    expect(calc(options)).toBe(1240)
})

test("147000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 145001
    }
    expect(calc(options)).toBe(0)
})

test("147000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 145001
    }
    expect(calc(options)).toBe(0)
})

test("147000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 145001
    }
    expect(calc(options)).toBe(0)
})

test("147000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 145001
    }
    expect(calc(options)).toBe(0)
})

test("147000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 145001
    }
    expect(calc(options)).toBe(0)
})

test("147000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 145001
    }
    expect(calc(options)).toBe(0)
})

test("147000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 145001
    }
    expect(calc(options)).toBe(8100)
})

test("149000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 147001
    }
    expect(calc(options)).toBe(2920)
})

test("149000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 147001
    }
    expect(calc(options)).toBe(1300)
})

test("149000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 147001
    }
    expect(calc(options)).toBe(0)
})

test("149000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 147001
    }
    expect(calc(options)).toBe(0)
})

test("149000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 147001
    }
    expect(calc(options)).toBe(0)
})

test("149000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 147001
    }
    expect(calc(options)).toBe(0)
})

test("149000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 147001
    }
    expect(calc(options)).toBe(0)
})

test("149000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 147001
    }
    expect(calc(options)).toBe(0)
})

test("149000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 147001
    }
    expect(calc(options)).toBe(8400)
})

test("151000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 149001
    }
    expect(calc(options)).toBe(2980)
})

test("151000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 149001
    }
    expect(calc(options)).toBe(1360)
})

test("151000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 149001
    }
    expect(calc(options)).toBe(0)
})

test("151000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 149001
    }
    expect(calc(options)).toBe(0)
})

test("151000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 149001
    }
    expect(calc(options)).toBe(0)
})

test("151000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 149001
    }
    expect(calc(options)).toBe(0)
})

test("151000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 149001
    }
    expect(calc(options)).toBe(0)
})

test("151000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 149001
    }
    expect(calc(options)).toBe(0)
})

test("151000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 149001
    }
    expect(calc(options)).toBe(8700)
})

test("153000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 151001
    }
    expect(calc(options)).toBe(3050)
})

test("153000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 151001
    }
    expect(calc(options)).toBe(1430)
})

test("153000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 151001
    }
    expect(calc(options)).toBe(0)
})

test("153000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 151001
    }
    expect(calc(options)).toBe(0)
})

test("153000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 151001
    }
    expect(calc(options)).toBe(0)
})

test("153000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 151001
    }
    expect(calc(options)).toBe(0)
})

test("153000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 151001
    }
    expect(calc(options)).toBe(0)
})

test("153000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 151001
    }
    expect(calc(options)).toBe(0)
})

test("153000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 151001
    }
    expect(calc(options)).toBe(9000)
})

test("155000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 153001
    }
    expect(calc(options)).toBe(3120)
})

test("155000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 153001
    }
    expect(calc(options)).toBe(1500)
})

test("155000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 153001
    }
    expect(calc(options)).toBe(0)
})

test("155000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 153001
    }
    expect(calc(options)).toBe(0)
})

test("155000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 153001
    }
    expect(calc(options)).toBe(0)
})

test("155000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 153001
    }
    expect(calc(options)).toBe(0)
})

test("155000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 153001
    }
    expect(calc(options)).toBe(0)
})

test("155000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 153001
    }
    expect(calc(options)).toBe(0)
})

test("155000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 153001
    }
    expect(calc(options)).toBe(9300)
})

test("157000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 155001
    }
    expect(calc(options)).toBe(3200)
})

test("157000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 155001
    }
    expect(calc(options)).toBe(1570)
})

test("157000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 155001
    }
    expect(calc(options)).toBe(0)
})

test("157000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 155001
    }
    expect(calc(options)).toBe(0)
})

test("157000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 155001
    }
    expect(calc(options)).toBe(0)
})

test("157000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 155001
    }
    expect(calc(options)).toBe(0)
})

test("157000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 155001
    }
    expect(calc(options)).toBe(0)
})

test("157000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 155001
    }
    expect(calc(options)).toBe(0)
})

test("157000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 155001
    }
    expect(calc(options)).toBe(9600)
})

test("159000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 157001
    }
    expect(calc(options)).toBe(3270)
})

test("159000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 157001
    }
    expect(calc(options)).toBe(1640)
})

test("159000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 157001
    }
    expect(calc(options)).toBe(0)
})

test("159000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 157001
    }
    expect(calc(options)).toBe(0)
})

test("159000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 157001
    }
    expect(calc(options)).toBe(0)
})

test("159000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 157001
    }
    expect(calc(options)).toBe(0)
})

test("159000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 157001
    }
    expect(calc(options)).toBe(0)
})

test("159000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 157001
    }
    expect(calc(options)).toBe(0)
})

test("159000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 157001
    }
    expect(calc(options)).toBe(9900)
})

test("161000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 159001
    }
    expect(calc(options)).toBe(3340)
})

test("161000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 159001
    }
    expect(calc(options)).toBe(1720)
})

test("161000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 159001
    }
    expect(calc(options)).toBe(100)
})

test("161000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 159001
    }
    expect(calc(options)).toBe(0)
})

test("161000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 159001
    }
    expect(calc(options)).toBe(0)
})

test("161000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 159001
    }
    expect(calc(options)).toBe(0)
})

test("161000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 159001
    }
    expect(calc(options)).toBe(0)
})

test("161000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 159001
    }
    expect(calc(options)).toBe(0)
})

test("161000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 159001
    }
    expect(calc(options)).toBe(10200)
})

test("163000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 161001
    }
    expect(calc(options)).toBe(3410)
})

test("163000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 161001
    }
    expect(calc(options)).toBe(1790)
})

test("163000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 161001
    }
    expect(calc(options)).toBe(170)
})

test("163000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 161001
    }
    expect(calc(options)).toBe(0)
})

test("163000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 161001
    }
    expect(calc(options)).toBe(0)
})

test("163000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 161001
    }
    expect(calc(options)).toBe(0)
})

test("163000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 161001
    }
    expect(calc(options)).toBe(0)
})

test("163000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 161001
    }
    expect(calc(options)).toBe(0)
})

test("163000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 161001
    }
    expect(calc(options)).toBe(10500)
})

test("165000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 163001
    }
    expect(calc(options)).toBe(3480)
})

test("165000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 163001
    }
    expect(calc(options)).toBe(1860)
})

test("165000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 163001
    }
    expect(calc(options)).toBe(250)
})

test("165000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 163001
    }
    expect(calc(options)).toBe(0)
})

test("165000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 163001
    }
    expect(calc(options)).toBe(0)
})

test("165000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 163001
    }
    expect(calc(options)).toBe(0)
})

test("165000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 163001
    }
    expect(calc(options)).toBe(0)
})

test("165000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 163001
    }
    expect(calc(options)).toBe(0)
})

test("165000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 163001
    }
    expect(calc(options)).toBe(10800)
})

test("167000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 165001
    }
    expect(calc(options)).toBe(3550)
})

test("167000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 165001
    }
    expect(calc(options)).toBe(1930)
})

test("167000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 165001
    }
    expect(calc(options)).toBe(320)
})

test("167000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 165001
    }
    expect(calc(options)).toBe(0)
})

test("167000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 165001
    }
    expect(calc(options)).toBe(0)
})

test("167000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 165001
    }
    expect(calc(options)).toBe(0)
})

test("167000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 165001
    }
    expect(calc(options)).toBe(0)
})

test("167000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 165001
    }
    expect(calc(options)).toBe(0)
})

test("167000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 165001
    }
    expect(calc(options)).toBe(11100)
})

test("169000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 167001
    }
    expect(calc(options)).toBe(3620)
})

test("169000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 167001
    }
    expect(calc(options)).toBe(2000)
})

test("169000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 167001
    }
    expect(calc(options)).toBe(390)
})

test("169000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 167001
    }
    expect(calc(options)).toBe(0)
})

test("169000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 167001
    }
    expect(calc(options)).toBe(0)
})

test("169000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 167001
    }
    expect(calc(options)).toBe(0)
})

test("169000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 167001
    }
    expect(calc(options)).toBe(0)
})

test("169000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 167001
    }
    expect(calc(options)).toBe(0)
})

test("169000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 167001
    }
    expect(calc(options)).toBe(11400)
})

test("171000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 169001
    }
    expect(calc(options)).toBe(3700)
})

test("171000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 169001
    }
    expect(calc(options)).toBe(2070)
})

test("171000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 169001
    }
    expect(calc(options)).toBe(460)
})

test("171000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 169001
    }
    expect(calc(options)).toBe(0)
})

test("171000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 169001
    }
    expect(calc(options)).toBe(0)
})

test("171000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 169001
    }
    expect(calc(options)).toBe(0)
})

test("171000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 169001
    }
    expect(calc(options)).toBe(0)
})

test("171000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 169001
    }
    expect(calc(options)).toBe(0)
})

test("171000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 169001
    }
    expect(calc(options)).toBe(11700)
})

test("173000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 171001
    }
    expect(calc(options)).toBe(3770)
})

test("173000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 171001
    }
    expect(calc(options)).toBe(2140)
})

test("173000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 171001
    }
    expect(calc(options)).toBe(530)
})

test("173000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 171001
    }
    expect(calc(options)).toBe(0)
})

test("173000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 171001
    }
    expect(calc(options)).toBe(0)
})

test("173000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 171001
    }
    expect(calc(options)).toBe(0)
})

test("173000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 171001
    }
    expect(calc(options)).toBe(0)
})

test("173000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 171001
    }
    expect(calc(options)).toBe(0)
})

test("173000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 171001
    }
    expect(calc(options)).toBe(12000)
})

test("175000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 173001
    }
    expect(calc(options)).toBe(3840)
})

test("175000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 173001
    }
    expect(calc(options)).toBe(2220)
})

test("175000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 173001
    }
    expect(calc(options)).toBe(600)
})

test("175000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 173001
    }
    expect(calc(options)).toBe(0)
})

test("175000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 173001
    }
    expect(calc(options)).toBe(0)
})

test("175000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 173001
    }
    expect(calc(options)).toBe(0)
})

test("175000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 173001
    }
    expect(calc(options)).toBe(0)
})

test("175000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 173001
    }
    expect(calc(options)).toBe(0)
})

test("175000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 173001
    }
    expect(calc(options)).toBe(12400)
})

test("177000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 175001
    }
    expect(calc(options)).toBe(3910)
})

test("177000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 175001
    }
    expect(calc(options)).toBe(2290)
})

test("177000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 175001
    }
    expect(calc(options)).toBe(670)
})

test("177000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 175001
    }
    expect(calc(options)).toBe(0)
})

test("177000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 175001
    }
    expect(calc(options)).toBe(0)
})

test("177000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 175001
    }
    expect(calc(options)).toBe(0)
})

test("177000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 175001
    }
    expect(calc(options)).toBe(0)
})

test("177000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 175001
    }
    expect(calc(options)).toBe(0)
})

test("177000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 175001
    }
    expect(calc(options)).toBe(12700)
})

test("179000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 177001
    }
    expect(calc(options)).toBe(3980)
})

test("179000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 177001
    }
    expect(calc(options)).toBe(2360)
})

test("179000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 177001
    }
    expect(calc(options)).toBe(750)
})

test("179000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 177001
    }
    expect(calc(options)).toBe(0)
})

test("179000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 177001
    }
    expect(calc(options)).toBe(0)
})

test("179000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 177001
    }
    expect(calc(options)).toBe(0)
})

test("179000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 177001
    }
    expect(calc(options)).toBe(0)
})

test("179000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 177001
    }
    expect(calc(options)).toBe(0)
})

test("179000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 177001
    }
    expect(calc(options)).toBe(13200)
})

test("181000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 179001
    }
    expect(calc(options)).toBe(4050)
})

test("181000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 179001
    }
    expect(calc(options)).toBe(2430)
})

test("181000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 179001
    }
    expect(calc(options)).toBe(820)
})

test("181000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 179001
    }
    expect(calc(options)).toBe(0)
})

test("181000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 179001
    }
    expect(calc(options)).toBe(0)
})

test("181000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 179001
    }
    expect(calc(options)).toBe(0)
})

test("181000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 179001
    }
    expect(calc(options)).toBe(0)
})

test("181000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 179001
    }
    expect(calc(options)).toBe(0)
})

test("181000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 179001
    }
    expect(calc(options)).toBe(13900)
})

test("183000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 181001
    }
    expect(calc(options)).toBe(4120)
})

test("183000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 181001
    }
    expect(calc(options)).toBe(2500)
})

test("183000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 181001
    }
    expect(calc(options)).toBe(890)
})

test("183000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 181001
    }
    expect(calc(options)).toBe(0)
})

test("183000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 181001
    }
    expect(calc(options)).toBe(0)
})

test("183000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 181001
    }
    expect(calc(options)).toBe(0)
})

test("183000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 181001
    }
    expect(calc(options)).toBe(0)
})

test("183000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 181001
    }
    expect(calc(options)).toBe(0)
})

test("183000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 181001
    }
    expect(calc(options)).toBe(14600)
})

test("185000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 183001
    }
    expect(calc(options)).toBe(4200)
})

test("185000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 183001
    }
    expect(calc(options)).toBe(2570)
})

test("185000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 183001
    }
    expect(calc(options)).toBe(960)
})

test("185000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 183001
    }
    expect(calc(options)).toBe(0)
})

test("185000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 183001
    }
    expect(calc(options)).toBe(0)
})

test("185000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 183001
    }
    expect(calc(options)).toBe(0)
})

test("185000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 183001
    }
    expect(calc(options)).toBe(0)
})

test("185000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 183001
    }
    expect(calc(options)).toBe(0)
})

test("185000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 183001
    }
    expect(calc(options)).toBe(15300)
})

test("187000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 185001
    }
    expect(calc(options)).toBe(4270)
})

test("187000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 185001
    }
    expect(calc(options)).toBe(2640)
})

test("187000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 185001
    }
    expect(calc(options)).toBe(1030)
})

test("187000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 185001
    }
    expect(calc(options)).toBe(0)
})

test("187000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 185001
    }
    expect(calc(options)).toBe(0)
})

test("187000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 185001
    }
    expect(calc(options)).toBe(0)
})

test("187000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 185001
    }
    expect(calc(options)).toBe(0)
})

test("187000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 185001
    }
    expect(calc(options)).toBe(0)
})

test("187000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 185001
    }
    expect(calc(options)).toBe(16000)
})

test("189000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 187001
    }
    expect(calc(options)).toBe(4340)
})

test("189000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 187001
    }
    expect(calc(options)).toBe(2720)
})

test("189000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 187001
    }
    expect(calc(options)).toBe(1100)
})

test("189000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 187001
    }
    expect(calc(options)).toBe(0)
})

test("189000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 187001
    }
    expect(calc(options)).toBe(0)
})

test("189000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 187001
    }
    expect(calc(options)).toBe(0)
})

test("189000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 187001
    }
    expect(calc(options)).toBe(0)
})

test("189000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 187001
    }
    expect(calc(options)).toBe(0)
})

test("189000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 187001
    }
    expect(calc(options)).toBe(16700)
})

test("191000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 189001
    }
    expect(calc(options)).toBe(4410)
})

test("191000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 189001
    }
    expect(calc(options)).toBe(2790)
})

test("191000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 189001
    }
    expect(calc(options)).toBe(1170)
})

test("191000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 189001
    }
    expect(calc(options)).toBe(0)
})

test("191000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 189001
    }
    expect(calc(options)).toBe(0)
})

test("191000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 189001
    }
    expect(calc(options)).toBe(0)
})

test("191000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 189001
    }
    expect(calc(options)).toBe(0)
})

test("191000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 189001
    }
    expect(calc(options)).toBe(0)
})

test("191000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 189001
    }
    expect(calc(options)).toBe(17500)
})

test("193000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 191001
    }
    expect(calc(options)).toBe(4480)
})

test("193000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 191001
    }
    expect(calc(options)).toBe(2860)
})

test("193000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 191001
    }
    expect(calc(options)).toBe(1250)
})

test("193000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 191001
    }
    expect(calc(options)).toBe(0)
})

test("193000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 191001
    }
    expect(calc(options)).toBe(0)
})

test("193000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 191001
    }
    expect(calc(options)).toBe(0)
})

test("193000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 191001
    }
    expect(calc(options)).toBe(0)
})

test("193000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 191001
    }
    expect(calc(options)).toBe(0)
})

test("193000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 191001
    }
    expect(calc(options)).toBe(18100)
})

test("195000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 193001
    }
    expect(calc(options)).toBe(4550)
})

test("195000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 193001
    }
    expect(calc(options)).toBe(2930)
})

test("195000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 193001
    }
    expect(calc(options)).toBe(1320)
})

test("195000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 193001
    }
    expect(calc(options)).toBe(0)
})

test("195000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 193001
    }
    expect(calc(options)).toBe(0)
})

test("195000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 193001
    }
    expect(calc(options)).toBe(0)
})

test("195000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 193001
    }
    expect(calc(options)).toBe(0)
})

test("195000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 193001
    }
    expect(calc(options)).toBe(0)
})

test("195000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 193001
    }
    expect(calc(options)).toBe(18800)
})

test("197000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 195001
    }
    expect(calc(options)).toBe(4630)
})

test("197000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 195001
    }
    expect(calc(options)).toBe(3000)
})

test("197000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 195001
    }
    expect(calc(options)).toBe(1390)
})

test("197000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 195001
    }
    expect(calc(options)).toBe(0)
})

test("197000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 195001
    }
    expect(calc(options)).toBe(0)
})

test("197000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 195001
    }
    expect(calc(options)).toBe(0)
})

test("197000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 195001
    }
    expect(calc(options)).toBe(0)
})

test("197000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 195001
    }
    expect(calc(options)).toBe(0)
})

test("197000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 195001
    }
    expect(calc(options)).toBe(19500)
})

test("199000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 197001
    }
    expect(calc(options)).toBe(4700)
})

test("199000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 197001
    }
    expect(calc(options)).toBe(3070)
})

test("199000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 197001
    }
    expect(calc(options)).toBe(1460)
})

test("199000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 197001
    }
    expect(calc(options)).toBe(0)
})

test("199000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 197001
    }
    expect(calc(options)).toBe(0)
})

test("199000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 197001
    }
    expect(calc(options)).toBe(0)
})

test("199000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 197001
    }
    expect(calc(options)).toBe(0)
})

test("199000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 197001
    }
    expect(calc(options)).toBe(0)
})

test("199000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 197001
    }
    expect(calc(options)).toBe(20200)
})

test("201000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 199001
    }
    expect(calc(options)).toBe(4770)
})

test("201000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 199001
    }
    expect(calc(options)).toBe(3140)
})

test("201000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 199001
    }
    expect(calc(options)).toBe(1530)
})

test("201000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 199001
    }
    expect(calc(options)).toBe(0)
})

test("201000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 199001
    }
    expect(calc(options)).toBe(0)
})

test("201000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 199001
    }
    expect(calc(options)).toBe(0)
})

test("201000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 199001
    }
    expect(calc(options)).toBe(0)
})

test("201000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 199001
    }
    expect(calc(options)).toBe(0)
})

test("201000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 199001
    }
    expect(calc(options)).toBe(20900)
})

test("203000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 201001
    }
    expect(calc(options)).toBe(4840)
})

test("203000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 201001
    }
    expect(calc(options)).toBe(3220)
})

test("203000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 201001
    }
    expect(calc(options)).toBe(1600)
})

test("203000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 201001
    }
    expect(calc(options)).toBe(0)
})

test("203000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 201001
    }
    expect(calc(options)).toBe(0)
})

test("203000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 201001
    }
    expect(calc(options)).toBe(0)
})

test("203000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 201001
    }
    expect(calc(options)).toBe(0)
})

test("203000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 201001
    }
    expect(calc(options)).toBe(0)
})

test("203000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 201001
    }
    expect(calc(options)).toBe(21500)
})

test("205000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 203001
    }
    expect(calc(options)).toBe(4910)
})

test("205000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 203001
    }
    expect(calc(options)).toBe(3290)
})

test("205000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 203001
    }
    expect(calc(options)).toBe(1670)
})

test("205000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 203001
    }
    expect(calc(options)).toBe(0)
})

test("205000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 203001
    }
    expect(calc(options)).toBe(0)
})

test("205000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 203001
    }
    expect(calc(options)).toBe(0)
})

test("205000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 203001
    }
    expect(calc(options)).toBe(0)
})

test("205000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 203001
    }
    expect(calc(options)).toBe(0)
})

test("205000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 203001
    }
    expect(calc(options)).toBe(22200)
})

test("207000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 205001
    }
    expect(calc(options)).toBe(4980)
})

test("207000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 205001
    }
    expect(calc(options)).toBe(3360)
})

test("207000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 205001
    }
    expect(calc(options)).toBe(1750)
})

test("207000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 205001
    }
    expect(calc(options)).toBe(130)
})

test("207000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 205001
    }
    expect(calc(options)).toBe(0)
})

test("207000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 205001
    }
    expect(calc(options)).toBe(0)
})

test("207000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 205001
    }
    expect(calc(options)).toBe(0)
})

test("207000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 205001
    }
    expect(calc(options)).toBe(0)
})

test("207000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 205001
    }
    expect(calc(options)).toBe(22700)
})

test("209000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 207001
    }
    expect(calc(options)).toBe(5050)
})

test("209000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 207001
    }
    expect(calc(options)).toBe(3430)
})

test("209000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 207001
    }
    expect(calc(options)).toBe(1820)
})

test("209000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 207001
    }
    expect(calc(options)).toBe(200)
})

test("209000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 207001
    }
    expect(calc(options)).toBe(0)
})

test("209000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 207001
    }
    expect(calc(options)).toBe(0)
})

test("209000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 207001
    }
    expect(calc(options)).toBe(0)
})

test("209000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 207001
    }
    expect(calc(options)).toBe(0)
})

test("209000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 207001
    }
    expect(calc(options)).toBe(23300)
})

test("211000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 209001
    }
    expect(calc(options)).toBe(5130)
})

test("211000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 209001
    }
    expect(calc(options)).toBe(3500)
})

test("211000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 209001
    }
    expect(calc(options)).toBe(1890)
})

test("211000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 209001
    }
    expect(calc(options)).toBe(280)
})

test("211000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 209001
    }
    expect(calc(options)).toBe(0)
})

test("211000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 209001
    }
    expect(calc(options)).toBe(0)
})

test("211000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 209001
    }
    expect(calc(options)).toBe(0)
})

test("211000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 209001
    }
    expect(calc(options)).toBe(0)
})

test("211000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 209001
    }
    expect(calc(options)).toBe(23900)
})

test("213000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 211001
    }
    expect(calc(options)).toBe(5200)
})

test("213000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 211001
    }
    expect(calc(options)).toBe(3570)
})

test("213000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 211001
    }
    expect(calc(options)).toBe(1960)
})

test("213000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 211001
    }
    expect(calc(options)).toBe(350)
})

test("213000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 211001
    }
    expect(calc(options)).toBe(0)
})

test("213000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 211001
    }
    expect(calc(options)).toBe(0)
})

test("213000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 211001
    }
    expect(calc(options)).toBe(0)
})

test("213000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 211001
    }
    expect(calc(options)).toBe(0)
})

test("213000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 211001
    }
    expect(calc(options)).toBe(24400)
})

test("215000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 213001
    }
    expect(calc(options)).toBe(5270)
})

test("215000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 213001
    }
    expect(calc(options)).toBe(3640)
})

test("215000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 213001
    }
    expect(calc(options)).toBe(2030)
})

test("215000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 213001
    }
    expect(calc(options)).toBe(420)
})

test("215000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 213001
    }
    expect(calc(options)).toBe(0)
})

test("215000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 213001
    }
    expect(calc(options)).toBe(0)
})

test("215000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 213001
    }
    expect(calc(options)).toBe(0)
})

test("215000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 213001
    }
    expect(calc(options)).toBe(0)
})

test("215000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 213001
    }
    expect(calc(options)).toBe(25000)
})

test("217000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 215001
    }
    expect(calc(options)).toBe(5340)
})

test("217000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 215001
    }
    expect(calc(options)).toBe(3720)
})

test("217000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 215001
    }
    expect(calc(options)).toBe(2100)
})

test("217000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 215001
    }
    expect(calc(options)).toBe(490)
})

test("217000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 215001
    }
    expect(calc(options)).toBe(0)
})

test("217000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 215001
    }
    expect(calc(options)).toBe(0)
})

test("217000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 215001
    }
    expect(calc(options)).toBe(0)
})

test("217000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 215001
    }
    expect(calc(options)).toBe(0)
})

test("217000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 215001
    }
    expect(calc(options)).toBe(25500)
})

test("219000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 217001
    }
    expect(calc(options)).toBe(5410)
})

test("219000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 217001
    }
    expect(calc(options)).toBe(3790)
})

test("219000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 217001
    }
    expect(calc(options)).toBe(2170)
})

test("219000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 217001
    }
    expect(calc(options)).toBe(560)
})

test("219000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 217001
    }
    expect(calc(options)).toBe(0)
})

test("219000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 217001
    }
    expect(calc(options)).toBe(0)
})

test("219000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 217001
    }
    expect(calc(options)).toBe(0)
})

test("219000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 217001
    }
    expect(calc(options)).toBe(0)
})

test("219000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 217001
    }
    expect(calc(options)).toBe(26100)
})

test("221000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 219001
    }
    expect(calc(options)).toBe(5480)
})

test("221000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 219001
    }
    expect(calc(options)).toBe(3860)
})

test("221000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 219001
    }
    expect(calc(options)).toBe(2250)
})

test("221000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 219001
    }
    expect(calc(options)).toBe(630)
})

test("221000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 219001
    }
    expect(calc(options)).toBe(0)
})

test("221000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 219001
    }
    expect(calc(options)).toBe(0)
})

test("221000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 219001
    }
    expect(calc(options)).toBe(0)
})

test("221000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 219001
    }
    expect(calc(options)).toBe(0)
})

test("221000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 219001
    }
    expect(calc(options)).toBe(26800)
})

test("224000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 221001
    }
    expect(calc(options)).toBe(5560)
})

test("224000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 221001
    }
    expect(calc(options)).toBe(3950)
})

test("224000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 221001
    }
    expect(calc(options)).toBe(2340)
})

test("224000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 221001
    }
    expect(calc(options)).toBe(710)
})

test("224000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 221001
    }
    expect(calc(options)).toBe(0)
})

test("224000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 221001
    }
    expect(calc(options)).toBe(0)
})

test("224000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 221001
    }
    expect(calc(options)).toBe(0)
})

test("224000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 221001
    }
    expect(calc(options)).toBe(0)
})

test("224000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 221001
    }
    expect(calc(options)).toBe(27400)
})

test("227000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 224001
    }
    expect(calc(options)).toBe(5680)
})

test("227000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 224001
    }
    expect(calc(options)).toBe(4060)
})

test("227000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 224001
    }
    expect(calc(options)).toBe(2440)
})

test("227000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 224001
    }
    expect(calc(options)).toBe(830)
})

test("227000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 224001
    }
    expect(calc(options)).toBe(0)
})

test("227000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 224001
    }
    expect(calc(options)).toBe(0)
})

test("227000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 224001
    }
    expect(calc(options)).toBe(0)
})

test("227000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 224001
    }
    expect(calc(options)).toBe(0)
})

test("227000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 224001
    }
    expect(calc(options)).toBe(28400)
})

test("230000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 227001
    }
    expect(calc(options)).toBe(5780)
})

test("230000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 227001
    }
    expect(calc(options)).toBe(4170)
})

test("230000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 227001
    }
    expect(calc(options)).toBe(2550)
})

test("230000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 227001
    }
    expect(calc(options)).toBe(930)
})

test("230000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 227001
    }
    expect(calc(options)).toBe(0)
})

test("230000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 227001
    }
    expect(calc(options)).toBe(0)
})

test("230000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 227001
    }
    expect(calc(options)).toBe(0)
})

test("230000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 227001
    }
    expect(calc(options)).toBe(0)
})

test("230000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 227001
    }
    expect(calc(options)).toBe(29300)
})

test("233000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 230001
    }
    expect(calc(options)).toBe(5890)
})

test("233000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 230001
    }
    expect(calc(options)).toBe(4280)
})

test("233000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 230001
    }
    expect(calc(options)).toBe(2650)
})

test("233000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 230001
    }
    expect(calc(options)).toBe(1040)
})

test("233000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 230001
    }
    expect(calc(options)).toBe(0)
})

test("233000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 230001
    }
    expect(calc(options)).toBe(0)
})

test("233000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 230001
    }
    expect(calc(options)).toBe(0)
})

test("233000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 230001
    }
    expect(calc(options)).toBe(0)
})

test("233000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 230001
    }
    expect(calc(options)).toBe(30300)
})

test("236000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 233001
    }
    expect(calc(options)).toBe(5990)
})

test("236000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 233001
    }
    expect(calc(options)).toBe(4380)
})

test("236000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 233001
    }
    expect(calc(options)).toBe(2770)
})

test("236000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 233001
    }
    expect(calc(options)).toBe(1140)
})

test("236000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 233001
    }
    expect(calc(options)).toBe(0)
})

test("236000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 233001
    }
    expect(calc(options)).toBe(0)
})

test("236000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 233001
    }
    expect(calc(options)).toBe(0)
})

test("236000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 233001
    }
    expect(calc(options)).toBe(0)
})

test("236000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 233001
    }
    expect(calc(options)).toBe(31300)
})

test("239000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 236001
    }
    expect(calc(options)).toBe(6110)
})

test("239000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 236001
    }
    expect(calc(options)).toBe(4490)
})

test("239000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 236001
    }
    expect(calc(options)).toBe(2870)
})

test("239000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 236001
    }
    expect(calc(options)).toBe(1260)
})

test("239000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 236001
    }
    expect(calc(options)).toBe(0)
})

test("239000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 236001
    }
    expect(calc(options)).toBe(0)
})

test("239000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 236001
    }
    expect(calc(options)).toBe(0)
})

test("239000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 236001
    }
    expect(calc(options)).toBe(0)
})

test("239000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 236001
    }
    expect(calc(options)).toBe(32400)
})

test("242000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 239001
    }
    expect(calc(options)).toBe(6210)
})

test("242000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 239001
    }
    expect(calc(options)).toBe(4590)
})

test("242000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 239001
    }
    expect(calc(options)).toBe(2980)
})

test("242000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 239001
    }
    expect(calc(options)).toBe(1360)
})

test("242000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 239001
    }
    expect(calc(options)).toBe(0)
})

test("242000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 239001
    }
    expect(calc(options)).toBe(0)
})

test("242000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 239001
    }
    expect(calc(options)).toBe(0)
})

test("242000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 239001
    }
    expect(calc(options)).toBe(0)
})

test("242000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 239001
    }
    expect(calc(options)).toBe(33400)
})

test("245000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 242001
    }
    expect(calc(options)).toBe(6320)
})

test("245000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 242001
    }
    expect(calc(options)).toBe(4710)
})

test("245000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 242001
    }
    expect(calc(options)).toBe(3080)
})

test("245000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 242001
    }
    expect(calc(options)).toBe(1470)
})

test("245000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 242001
    }
    expect(calc(options)).toBe(0)
})

test("245000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 242001
    }
    expect(calc(options)).toBe(0)
})

test("245000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 242001
    }
    expect(calc(options)).toBe(0)
})

test("245000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 242001
    }
    expect(calc(options)).toBe(0)
})

test("245000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 242001
    }
    expect(calc(options)).toBe(34400)
})

test("248000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 245001
    }
    expect(calc(options)).toBe(6420)
})

test("248000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 245001
    }
    expect(calc(options)).toBe(4810)
})

test("248000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 245001
    }
    expect(calc(options)).toBe(3200)
})

test("248000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 245001
    }
    expect(calc(options)).toBe(1570)
})

test("248000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 245001
    }
    expect(calc(options)).toBe(0)
})

test("248000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 245001
    }
    expect(calc(options)).toBe(0)
})

test("248000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 245001
    }
    expect(calc(options)).toBe(0)
})

test("248000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 245001
    }
    expect(calc(options)).toBe(0)
})

test("248000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 245001
    }
    expect(calc(options)).toBe(35400)
})

test("251000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 248001
    }
    expect(calc(options)).toBe(6530)
})

test("251000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 248001
    }
    expect(calc(options)).toBe(4920)
})

test("251000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 248001
    }
    expect(calc(options)).toBe(3300)
})

test("251000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 248001
    }
    expect(calc(options)).toBe(1680)
})

test("251000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 248001
    }
    expect(calc(options)).toBe(0)
})

test("251000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 248001
    }
    expect(calc(options)).toBe(0)
})

test("251000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 248001
    }
    expect(calc(options)).toBe(0)
})

test("251000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 248001
    }
    expect(calc(options)).toBe(0)
})

test("251000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 248001
    }
    expect(calc(options)).toBe(36400)
})

test("254000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 251001
    }
    expect(calc(options)).toBe(6640)
})

test("254000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 251001
    }
    expect(calc(options)).toBe(5020)
})

test("254000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 251001
    }
    expect(calc(options)).toBe(3410)
})

test("254000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 251001
    }
    expect(calc(options)).toBe(1790)
})

test("254000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 251001
    }
    expect(calc(options)).toBe(170)
})

test("254000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 251001
    }
    expect(calc(options)).toBe(0)
})

test("254000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 251001
    }
    expect(calc(options)).toBe(0)
})

test("254000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 251001
    }
    expect(calc(options)).toBe(0)
})

test("254000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 251001
    }
    expect(calc(options)).toBe(37500)
})

test("257000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 254001
    }
    expect(calc(options)).toBe(6750)
})

test("257000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 254001
    }
    expect(calc(options)).toBe(5140)
})

test("257000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 254001
    }
    expect(calc(options)).toBe(3510)
})

test("257000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 254001
    }
    expect(calc(options)).toBe(1900)
})

test("257000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 254001
    }
    expect(calc(options)).toBe(290)
})

test("257000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 254001
    }
    expect(calc(options)).toBe(0)
})

test("257000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 254001
    }
    expect(calc(options)).toBe(0)
})

test("257000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 254001
    }
    expect(calc(options)).toBe(0)
})

test("257000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 254001
    }
    expect(calc(options)).toBe(38500)
})

test("260000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 257001
    }
    expect(calc(options)).toBe(6850)
})

test("260000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 257001
    }
    expect(calc(options)).toBe(5240)
})

test("260000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 257001
    }
    expect(calc(options)).toBe(3620)
})

test("260000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 257001
    }
    expect(calc(options)).toBe(2000)
})

test("260000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 257001
    }
    expect(calc(options)).toBe(390)
})

test("260000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 257001
    }
    expect(calc(options)).toBe(0)
})

test("260000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 257001
    }
    expect(calc(options)).toBe(0)
})

test("260000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 257001
    }
    expect(calc(options)).toBe(0)
})

test("260000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 257001
    }
    expect(calc(options)).toBe(39400)
})

test("263000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 260001
    }
    expect(calc(options)).toBe(6960)
})

test("263000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 260001
    }
    expect(calc(options)).toBe(5350)
})

test("263000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 260001
    }
    expect(calc(options)).toBe(3730)
})

test("263000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 260001
    }
    expect(calc(options)).toBe(2110)
})

test("263000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 260001
    }
    expect(calc(options)).toBe(500)
})

test("263000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 260001
    }
    expect(calc(options)).toBe(0)
})

test("263000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 260001
    }
    expect(calc(options)).toBe(0)
})

test("263000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 260001
    }
    expect(calc(options)).toBe(0)
})

test("263000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 260001
    }
    expect(calc(options)).toBe(40400)
})

test("266000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 263001
    }
    expect(calc(options)).toBe(7070)
})

test("266000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 263001
    }
    expect(calc(options)).toBe(5450)
})

test("266000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 263001
    }
    expect(calc(options)).toBe(3840)
})

test("266000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 263001
    }
    expect(calc(options)).toBe(2220)
})

test("266000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 263001
    }
    expect(calc(options)).toBe(600)
})

test("266000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 263001
    }
    expect(calc(options)).toBe(0)
})

test("266000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 263001
    }
    expect(calc(options)).toBe(0)
})

test("266000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 263001
    }
    expect(calc(options)).toBe(0)
})

test("266000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 263001
    }
    expect(calc(options)).toBe(41500)
})

test("269000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 266001
    }
    expect(calc(options)).toBe(7180)
})

test("269000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 266001
    }
    expect(calc(options)).toBe(5560)
})

test("269000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 266001
    }
    expect(calc(options)).toBe(3940)
})

test("269000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 266001
    }
    expect(calc(options)).toBe(2330)
})

test("269000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 266001
    }
    expect(calc(options)).toBe(710)
})

test("269000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 266001
    }
    expect(calc(options)).toBe(0)
})

test("269000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 266001
    }
    expect(calc(options)).toBe(0)
})

test("269000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 266001
    }
    expect(calc(options)).toBe(0)
})

test("269000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 266001
    }
    expect(calc(options)).toBe(42500)
})

test("272000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 269001
    }
    expect(calc(options)).toBe(7280)
})

test("272000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 269001
    }
    expect(calc(options)).toBe(5670)
})

test("272000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 269001
    }
    expect(calc(options)).toBe(4050)
})

test("272000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 269001
    }
    expect(calc(options)).toBe(2430)
})

test("272000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 269001
    }
    expect(calc(options)).toBe(820)
})

test("272000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 269001
    }
    expect(calc(options)).toBe(0)
})

test("272000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 269001
    }
    expect(calc(options)).toBe(0)
})

test("272000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 269001
    }
    expect(calc(options)).toBe(0)
})

test("272000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 269001
    }
    expect(calc(options)).toBe(43500)
})

test("275000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 272001
    }
    expect(calc(options)).toBe(7390)
})

test("275000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 272001
    }
    expect(calc(options)).toBe(5780)
})

test("275000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 272001
    }
    expect(calc(options)).toBe(4160)
})

test("275000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 272001
    }
    expect(calc(options)).toBe(2540)
})

test("275000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 272001
    }
    expect(calc(options)).toBe(930)
})

test("275000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 272001
    }
    expect(calc(options)).toBe(0)
})

test("275000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 272001
    }
    expect(calc(options)).toBe(0)
})

test("275000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 272001
    }
    expect(calc(options)).toBe(0)
})

test("275000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 272001
    }
    expect(calc(options)).toBe(44500)
})

test("278000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 275001
    }
    expect(calc(options)).toBe(7490)
})

test("278000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 275001
    }
    expect(calc(options)).toBe(5880)
})

test("278000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 275001
    }
    expect(calc(options)).toBe(4270)
})

test("278000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 275001
    }
    expect(calc(options)).toBe(2640)
})

test("278000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 275001
    }
    expect(calc(options)).toBe(1030)
})

test("278000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 275001
    }
    expect(calc(options)).toBe(0)
})

test("278000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 275001
    }
    expect(calc(options)).toBe(0)
})

test("278000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 275001
    }
    expect(calc(options)).toBe(0)
})

test("278000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 275001
    }
    expect(calc(options)).toBe(45500)
})

test("281000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 278001
    }
    expect(calc(options)).toBe(7610)
})

test("281000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 278001
    }
    expect(calc(options)).toBe(5990)
})

test("281000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 278001
    }
    expect(calc(options)).toBe(4370)
})

test("281000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 278001
    }
    expect(calc(options)).toBe(2760)
})

test("281000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 278001
    }
    expect(calc(options)).toBe(1140)
})

test("281000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 278001
    }
    expect(calc(options)).toBe(0)
})

test("281000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 278001
    }
    expect(calc(options)).toBe(0)
})

test("281000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 278001
    }
    expect(calc(options)).toBe(0)
})

test("281000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 278001
    }
    expect(calc(options)).toBe(46600)
})

test("284000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 281001
    }
    expect(calc(options)).toBe(7710)
})

test("284000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 281001
    }
    expect(calc(options)).toBe(6100)
})

test("284000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 281001
    }
    expect(calc(options)).toBe(4480)
})

test("284000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 281001
    }
    expect(calc(options)).toBe(2860)
})

test("284000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 281001
    }
    expect(calc(options)).toBe(1250)
})

test("284000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 281001
    }
    expect(calc(options)).toBe(0)
})

test("284000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 281001
    }
    expect(calc(options)).toBe(0)
})

test("284000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 281001
    }
    expect(calc(options)).toBe(0)
})

test("284000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 281001
    }
    expect(calc(options)).toBe(47600)
})

test("287000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 284001
    }
    expect(calc(options)).toBe(7820)
})

test("287000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 284001
    }
    expect(calc(options)).toBe(6210)
})

test("287000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 284001
    }
    expect(calc(options)).toBe(4580)
})

test("287000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 284001
    }
    expect(calc(options)).toBe(2970)
})

test("287000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 284001
    }
    expect(calc(options)).toBe(1360)
})

test("287000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 284001
    }
    expect(calc(options)).toBe(0)
})

test("287000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 284001
    }
    expect(calc(options)).toBe(0)
})

test("287000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 284001
    }
    expect(calc(options)).toBe(0)
})

test("287000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 284001
    }
    expect(calc(options)).toBe(48600)
})

test("290000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 287001
    }
    expect(calc(options)).toBe(7920)
})

test("290000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 287001
    }
    expect(calc(options)).toBe(6310)
})

test("290000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 287001
    }
    expect(calc(options)).toBe(4700)
})

test("290000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 287001
    }
    expect(calc(options)).toBe(3070)
})

test("290000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 287001
    }
    expect(calc(options)).toBe(1460)
})

test("290000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 287001
    }
    expect(calc(options)).toBe(0)
})

test("290000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 287001
    }
    expect(calc(options)).toBe(0)
})

test("290000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 287001
    }
    expect(calc(options)).toBe(0)
})

test("290000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 287001
    }
    expect(calc(options)).toBe(49700)
})

test("293000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 290001
    }
    expect(calc(options)).toBe(8040)
})

test("293000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 290001
    }
    expect(calc(options)).toBe(6420)
})

test("293000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 290001
    }
    expect(calc(options)).toBe(4800)
})

test("293000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 290001
    }
    expect(calc(options)).toBe(3190)
})

test("293000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 290001
    }
    expect(calc(options)).toBe(1570)
})

test("293000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 290001
    }
    expect(calc(options)).toBe(0)
})

test("293000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 290001
    }
    expect(calc(options)).toBe(0)
})

test("293000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 290001
    }
    expect(calc(options)).toBe(0)
})

test("293000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 290001
    }
    expect(calc(options)).toBe(50900)
})

test("296000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 293001
    }
    expect(calc(options)).toBe(8140)
})

test("296000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 293001
    }
    expect(calc(options)).toBe(6520)
})

test("296000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 293001
    }
    expect(calc(options)).toBe(4910)
})

test("296000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 293001
    }
    expect(calc(options)).toBe(3290)
})

test("296000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 293001
    }
    expect(calc(options)).toBe(1670)
})

test("296000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 293001
    }
    expect(calc(options)).toBe(0)
})

test("296000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 293001
    }
    expect(calc(options)).toBe(0)
})

test("296000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 293001
    }
    expect(calc(options)).toBe(0)
})

test("296000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 293001
    }
    expect(calc(options)).toBe(52100)
})

test("299000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 296001
    }
    expect(calc(options)).toBe(8250)
})

test("299000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 296001
    }
    expect(calc(options)).toBe(6640)
})

test("299000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 296001
    }
    expect(calc(options)).toBe(5010)
})

test("299000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 296001
    }
    expect(calc(options)).toBe(3400)
})

test("299000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 296001
    }
    expect(calc(options)).toBe(1790)
})

test("299000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 296001
    }
    expect(calc(options)).toBe(160)
})

test("299000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 296001
    }
    expect(calc(options)).toBe(0)
})

test("299000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 296001
    }
    expect(calc(options)).toBe(0)
})

test("299000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 296001
    }
    expect(calc(options)).toBe(52900)
})

test("302000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 299001
    }
    expect(calc(options)).toBe(8420)
})

test("302000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 299001
    }
    expect(calc(options)).toBe(6740)
})

test("302000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 299001
    }
    expect(calc(options)).toBe(5130)
})

test("302000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 299001
    }
    expect(calc(options)).toBe(3510)
})

test("302000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 299001
    }
    expect(calc(options)).toBe(1890)
})

test("302000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 299001
    }
    expect(calc(options)).toBe(280)
})

test("302000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 299001
    }
    expect(calc(options)).toBe(0)
})

test("302000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 299001
    }
    expect(calc(options)).toBe(0)
})

test("302000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 299001
    }
    expect(calc(options)).toBe(53700)
})

test("305000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 302001
    }
    expect(calc(options)).toBe(8670)
})

test("305000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 302001
    }
    expect(calc(options)).toBe(6860)
})

test("305000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 302001
    }
    expect(calc(options)).toBe(5250)
})

test("305000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 302001
    }
    expect(calc(options)).toBe(3630)
})

test("305000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 302001
    }
    expect(calc(options)).toBe(2010)
})

test("305000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 302001
    }
    expect(calc(options)).toBe(400)
})

test("305000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 302001
    }
    expect(calc(options)).toBe(0)
})

test("305000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 302001
    }
    expect(calc(options)).toBe(0)
})

test("305000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 302001
    }
    expect(calc(options)).toBe(54500)
})

test("308000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 305001
    }
    expect(calc(options)).toBe(8910)
})

test("308000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 305001
    }
    expect(calc(options)).toBe(6980)
})

test("308000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 305001
    }
    expect(calc(options)).toBe(5370)
})

test("308000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 305001
    }
    expect(calc(options)).toBe(3760)
})

test("308000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 305001
    }
    expect(calc(options)).toBe(2130)
})

test("308000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 305001
    }
    expect(calc(options)).toBe(520)
})

test("308000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 305001
    }
    expect(calc(options)).toBe(0)
})

test("308000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 305001
    }
    expect(calc(options)).toBe(0)
})

test("308000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 305001
    }
    expect(calc(options)).toBe(55200)
})

test("311000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 308001
    }
    expect(calc(options)).toBe(9160)
})

test("311000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 308001
    }
    expect(calc(options)).toBe(7110)
})

test("311000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 308001
    }
    expect(calc(options)).toBe(5490)
})

test("311000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 308001
    }
    expect(calc(options)).toBe(3880)
})

test("311000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 308001
    }
    expect(calc(options)).toBe(2260)
})

test("311000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 308001
    }
    expect(calc(options)).toBe(640)
})

test("311000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 308001
    }
    expect(calc(options)).toBe(0)
})

test("311000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 308001
    }
    expect(calc(options)).toBe(0)
})

test("311000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 308001
    }
    expect(calc(options)).toBe(56100)
})

test("314000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 311001
    }
    expect(calc(options)).toBe(9400)
})

test("314000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 311001
    }
    expect(calc(options)).toBe(7230)
})

test("314000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 311001
    }
    expect(calc(options)).toBe(5620)
})

test("314000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 311001
    }
    expect(calc(options)).toBe(4000)
})

test("314000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 311001
    }
    expect(calc(options)).toBe(2380)
})

test("314000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 311001
    }
    expect(calc(options)).toBe(770)
})

test("314000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 311001
    }
    expect(calc(options)).toBe(0)
})

test("314000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 311001
    }
    expect(calc(options)).toBe(0)
})

test("314000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 311001
    }
    expect(calc(options)).toBe(56900)
})

test("317000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 314001
    }
    expect(calc(options)).toBe(9650)
})

test("317000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 314001
    }
    expect(calc(options)).toBe(7350)
})

test("317000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 314001
    }
    expect(calc(options)).toBe(5740)
})

test("317000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 314001
    }
    expect(calc(options)).toBe(4120)
})

test("317000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 314001
    }
    expect(calc(options)).toBe(2500)
})

test("317000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 314001
    }
    expect(calc(options)).toBe(890)
})

test("317000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 314001
    }
    expect(calc(options)).toBe(0)
})

test("317000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 314001
    }
    expect(calc(options)).toBe(0)
})

test("317000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 314001
    }
    expect(calc(options)).toBe(57800)
})

test("320000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 317001
    }
    expect(calc(options)).toBe(9890)
})

test("320000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 317001
    }
    expect(calc(options)).toBe(7470)
})

test("320000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 317001
    }
    expect(calc(options)).toBe(5860)
})

test("320000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 317001
    }
    expect(calc(options)).toBe(4250)
})

test("320000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 317001
    }
    expect(calc(options)).toBe(2620)
})

test("320000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 317001
    }
    expect(calc(options)).toBe(1010)
})

test("320000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 317001
    }
    expect(calc(options)).toBe(0)
})

test("320000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 317001
    }
    expect(calc(options)).toBe(0)
})

test("320000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 317001
    }
    expect(calc(options)).toBe(58800)
})

test("323000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 320001
    }
    expect(calc(options)).toBe(10140)
})

test("323000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 320001
    }
    expect(calc(options)).toBe(7600)
})

test("323000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 320001
    }
    expect(calc(options)).toBe(5980)
})

test("323000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 320001
    }
    expect(calc(options)).toBe(4370)
})

test("323000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 320001
    }
    expect(calc(options)).toBe(2750)
})

test("323000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 320001
    }
    expect(calc(options)).toBe(1130)
})

test("323000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 320001
    }
    expect(calc(options)).toBe(0)
})

test("323000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 320001
    }
    expect(calc(options)).toBe(0)
})

test("323000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 320001
    }
    expect(calc(options)).toBe(59800)
})

test("326000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 323001
    }
    expect(calc(options)).toBe(10380)
})

test("326000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 323001
    }
    expect(calc(options)).toBe(7720)
})

test("326000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 323001
    }
    expect(calc(options)).toBe(6110)
})

test("326000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 323001
    }
    expect(calc(options)).toBe(4490)
})

test("326000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 323001
    }
    expect(calc(options)).toBe(2870)
})

test("326000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 323001
    }
    expect(calc(options)).toBe(1260)
})

test("326000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 323001
    }
    expect(calc(options)).toBe(0)
})

test("326000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 323001
    }
    expect(calc(options)).toBe(0)
})

test("326000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 323001
    }
    expect(calc(options)).toBe(60900)
})

test("329000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 326001
    }
    expect(calc(options)).toBe(10630)
})

test("329000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 326001
    }
    expect(calc(options)).toBe(7840)
})

test("329000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 326001
    }
    expect(calc(options)).toBe(6230)
})

test("329000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 326001
    }
    expect(calc(options)).toBe(4610)
})

test("329000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 326001
    }
    expect(calc(options)).toBe(2990)
})

test("329000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 326001
    }
    expect(calc(options)).toBe(1380)
})

test("329000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 326001
    }
    expect(calc(options)).toBe(0)
})

test("329000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 326001
    }
    expect(calc(options)).toBe(0)
})

test("329000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 326001
    }
    expect(calc(options)).toBe(61900)
})

test("332000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 329001
    }
    expect(calc(options)).toBe(10870)
})

test("332000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 329001
    }
    expect(calc(options)).toBe(7960)
})

test("332000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 329001
    }
    expect(calc(options)).toBe(6350)
})

test("332000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 329001
    }
    expect(calc(options)).toBe(4740)
})

test("332000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 329001
    }
    expect(calc(options)).toBe(3110)
})

test("332000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 329001
    }
    expect(calc(options)).toBe(1500)
})

test("332000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 329001
    }
    expect(calc(options)).toBe(0)
})

test("332000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 329001
    }
    expect(calc(options)).toBe(0)
})

test("332000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 329001
    }
    expect(calc(options)).toBe(62900)
})

test("335000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 332001
    }
    expect(calc(options)).toBe(11120)
})

test("335000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 332001
    }
    expect(calc(options)).toBe(8090)
})

test("335000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 332001
    }
    expect(calc(options)).toBe(6470)
})

test("335000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 332001
    }
    expect(calc(options)).toBe(4860)
})

test("335000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 332001
    }
    expect(calc(options)).toBe(3240)
})

test("335000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 332001
    }
    expect(calc(options)).toBe(1620)
})

test("335000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 332001
    }
    expect(calc(options)).toBe(0)
})

test("335000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 332001
    }
    expect(calc(options)).toBe(0)
})

test("335000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 332001
    }
    expect(calc(options)).toBe(63900)
})

test("338000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 335001
    }
    expect(calc(options)).toBe(11360)
})

test("338000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 335001
    }
    expect(calc(options)).toBe(8210)
})

test("338000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 335001
    }
    expect(calc(options)).toBe(6600)
})

test("338000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 335001
    }
    expect(calc(options)).toBe(4980)
})

test("338000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 335001
    }
    expect(calc(options)).toBe(3360)
})

test("338000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 335001
    }
    expect(calc(options)).toBe(1750)
})

test("338000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 335001
    }
    expect(calc(options)).toBe(130)
})

test("338000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 335001
    }
    expect(calc(options)).toBe(0)
})

test("338000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 335001
    }
    expect(calc(options)).toBe(64900)
})

test("341000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 338001
    }
    expect(calc(options)).toBe(11610)
})

test("341000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 338001
    }
    expect(calc(options)).toBe(8370)
})

test("341000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 338001
    }
    expect(calc(options)).toBe(6720)
})

test("341000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 338001
    }
    expect(calc(options)).toBe(5110)
})

test("341000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 338001
    }
    expect(calc(options)).toBe(3480)
})

test("341000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 338001
    }
    expect(calc(options)).toBe(1870)
})

test("341000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 338001
    }
    expect(calc(options)).toBe(260)
})

test("341000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 338001
    }
    expect(calc(options)).toBe(0)
})

test("341000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 338001
    }
    expect(calc(options)).toBe(66000)
})

test("344000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 341001
    }
    expect(calc(options)).toBe(11850)
})

test("344000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 341001
    }
    expect(calc(options)).toBe(8620)
})

test("344000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 341001
    }
    expect(calc(options)).toBe(6840)
})

test("344000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 341001
    }
    expect(calc(options)).toBe(5230)
})

test("344000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 341001
    }
    expect(calc(options)).toBe(3600)
})

test("344000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 341001
    }
    expect(calc(options)).toBe(1990)
})

test("344000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 341001
    }
    expect(calc(options)).toBe(380)
})

test("344000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 341001
    }
    expect(calc(options)).toBe(0)
})

test("344000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 341001
    }
    expect(calc(options)).toBe(67000)
})

test("347000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 344001
    }
    expect(calc(options)).toBe(12100)
})

test("347000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 344001
    }
    expect(calc(options)).toBe(8860)
})

test("347000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 344001
    }
    expect(calc(options)).toBe(6960)
})

test("347000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 344001
    }
    expect(calc(options)).toBe(5350)
})

test("347000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 344001
    }
    expect(calc(options)).toBe(3730)
})

test("347000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 344001
    }
    expect(calc(options)).toBe(2110)
})

test("347000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 344001
    }
    expect(calc(options)).toBe(500)
})

test("347000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 344001
    }
    expect(calc(options)).toBe(0)
})

test("347000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 344001
    }
    expect(calc(options)).toBe(68000)
})

test("350000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 347001
    }
    expect(calc(options)).toBe(12340)
})

test("350000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 347001
    }
    expect(calc(options)).toBe(9110)
})

test("350000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 347001
    }
    expect(calc(options)).toBe(7090)
})

test("350000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 347001
    }
    expect(calc(options)).toBe(5470)
})

test("350000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 347001
    }
    expect(calc(options)).toBe(3850)
})

test("350000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 347001
    }
    expect(calc(options)).toBe(2240)
})

test("350000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 347001
    }
    expect(calc(options)).toBe(620)
})

test("350000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 347001
    }
    expect(calc(options)).toBe(0)
})

test("350000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 347001
    }
    expect(calc(options)).toBe(69000)
})

test("353000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 350001
    }
    expect(calc(options)).toBe(12590)
})

test("353000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 350001
    }
    expect(calc(options)).toBe(9350)
})

test("353000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 350001
    }
    expect(calc(options)).toBe(7210)
})

test("353000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 350001
    }
    expect(calc(options)).toBe(5600)
})

test("353000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 350001
    }
    expect(calc(options)).toBe(3970)
})

test("353000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 350001
    }
    expect(calc(options)).toBe(2360)
})

test("353000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 350001
    }
    expect(calc(options)).toBe(750)
})

test("353000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 350001
    }
    expect(calc(options)).toBe(0)
})

test("353000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 350001
    }
    expect(calc(options)).toBe(70000)
})

test("356000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 353001
    }
    expect(calc(options)).toBe(12830)
})

test("356000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 353001
    }
    expect(calc(options)).toBe(9600)
})

test("356000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 353001
    }
    expect(calc(options)).toBe(7330)
})

test("356000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 353001
    }
    expect(calc(options)).toBe(5720)
})

test("356000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 353001
    }
    expect(calc(options)).toBe(4090)
})

test("356000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 353001
    }
    expect(calc(options)).toBe(2480)
})

test("356000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 353001
    }
    expect(calc(options)).toBe(870)
})

test("356000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 353001
    }
    expect(calc(options)).toBe(0)
})

test("356000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 353001
    }
    expect(calc(options)).toBe(71100)
})

test("359000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 356001
    }
    expect(calc(options)).toBe(13080)
})

test("359000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 356001
    }
    expect(calc(options)).toBe(9840)
})

test("359000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 356001
    }
    expect(calc(options)).toBe(7450)
})

test("359000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 356001
    }
    expect(calc(options)).toBe(5840)
})

test("359000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 356001
    }
    expect(calc(options)).toBe(4220)
})

test("359000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 356001
    }
    expect(calc(options)).toBe(2600)
})

test("359000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 356001
    }
    expect(calc(options)).toBe(990)
})

test("359000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 356001
    }
    expect(calc(options)).toBe(0)
})

test("359000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 356001
    }
    expect(calc(options)).toBe(72100)
})

test("362000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 359001
    }
    expect(calc(options)).toBe(13320)
})

test("362000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 359001
    }
    expect(calc(options)).toBe(10090)
})

test("362000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 359001
    }
    expect(calc(options)).toBe(7580)
})

test("362000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 359001
    }
    expect(calc(options)).toBe(5960)
})

test("362000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 359001
    }
    expect(calc(options)).toBe(4340)
})

test("362000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 359001
    }
    expect(calc(options)).toBe(2730)
})

test("362000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 359001
    }
    expect(calc(options)).toBe(1110)
})

test("362000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 359001
    }
    expect(calc(options)).toBe(0)
})

test("362000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 359001
    }
    expect(calc(options)).toBe(73100)
})

test("365000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 362001
    }
    expect(calc(options)).toBe(13570)
})

test("365000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 362001
    }
    expect(calc(options)).toBe(10330)
})

test("365000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 362001
    }
    expect(calc(options)).toBe(7700)
})

test("365000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 362001
    }
    expect(calc(options)).toBe(6090)
})

test("365000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 362001
    }
    expect(calc(options)).toBe(4460)
})

test("365000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 362001
    }
    expect(calc(options)).toBe(2850)
})

test("365000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 362001
    }
    expect(calc(options)).toBe(1240)
})

test("365000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 362001
    }
    expect(calc(options)).toBe(0)
})

test("365000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 362001
    }
    expect(calc(options)).toBe(74200)
})

test("368000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 365001
    }
    expect(calc(options)).toBe(13810)
})

test("368000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 365001
    }
    expect(calc(options)).toBe(10580)
})

test("368000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 365001
    }
    expect(calc(options)).toBe(7820)
})

test("368000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 365001
    }
    expect(calc(options)).toBe(6210)
})

test("368000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 365001
    }
    expect(calc(options)).toBe(4580)
})

test("368000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 365001
    }
    expect(calc(options)).toBe(2970)
})

test("368000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 365001
    }
    expect(calc(options)).toBe(1360)
})

test("368000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 365001
    }
    expect(calc(options)).toBe(0)
})

test("368000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 365001
    }
    expect(calc(options)).toBe(75200)
})

test("371000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 368001
    }
    expect(calc(options)).toBe(14060)
})

test("371000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 368001
    }
    expect(calc(options)).toBe(10820)
})

test("371000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 368001
    }
    expect(calc(options)).toBe(7940)
})

test("371000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 368001
    }
    expect(calc(options)).toBe(6330)
})

test("371000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 368001
    }
    expect(calc(options)).toBe(4710)
})

test("371000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 368001
    }
    expect(calc(options)).toBe(3090)
})

test("371000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 368001
    }
    expect(calc(options)).toBe(1480)
})

test("371000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 368001
    }
    expect(calc(options)).toBe(0)
})

test("371000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 368001
    }
    expect(calc(options)).toBe(76200)
})

test("374000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 371001
    }
    expect(calc(options)).toBe(14300)
})

test("374000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 371001
    }
    expect(calc(options)).toBe(11070)
})

test("374000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 371001
    }
    expect(calc(options)).toBe(8070)
})

test("374000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 371001
    }
    expect(calc(options)).toBe(6450)
})

test("374000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 371001
    }
    expect(calc(options)).toBe(4830)
})

test("374000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 371001
    }
    expect(calc(options)).toBe(3220)
})

test("374000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 371001
    }
    expect(calc(options)).toBe(1600)
})

test("374000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 371001
    }
    expect(calc(options)).toBe(0)
})

test("374000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 371001
    }
    expect(calc(options)).toBe(77100)
})

test("377000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 374001
    }
    expect(calc(options)).toBe(14550)
})

test("377000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 374001
    }
    expect(calc(options)).toBe(11310)
})

test("377000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 374001
    }
    expect(calc(options)).toBe(8190)
})

test("377000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 374001
    }
    expect(calc(options)).toBe(6580)
})

test("377000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 374001
    }
    expect(calc(options)).toBe(4950)
})

test("377000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 374001
    }
    expect(calc(options)).toBe(3340)
})

test("377000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 374001
    }
    expect(calc(options)).toBe(1730)
})

test("377000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 374001
    }
    expect(calc(options)).toBe(100)
})

test("377000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 374001
    }
    expect(calc(options)).toBe(78100)
})

test("380000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 377001
    }
    expect(calc(options)).toBe(14790)
})

test("380000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 377001
    }
    expect(calc(options)).toBe(11560)
})

test("380000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 377001
    }
    expect(calc(options)).toBe(8320)
})

test("380000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 377001
    }
    expect(calc(options)).toBe(6700)
})

test("380000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 377001
    }
    expect(calc(options)).toBe(5070)
})

test("380000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 377001
    }
    expect(calc(options)).toBe(3460)
})

test("380000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 377001
    }
    expect(calc(options)).toBe(1850)
})

test("380000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 377001
    }
    expect(calc(options)).toBe(220)
})

test("380000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 377001
    }
    expect(calc(options)).toBe(79000)
})

test("383000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 380001
    }
    expect(calc(options)).toBe(15040)
})

test("383000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 380001
    }
    expect(calc(options)).toBe(11800)
})

test("383000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 380001
    }
    expect(calc(options)).toBe(8570)
})

test("383000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 380001
    }
    expect(calc(options)).toBe(6820)
})

test("383000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 380001
    }
    expect(calc(options)).toBe(5200)
})

test("383000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 380001
    }
    expect(calc(options)).toBe(3580)
})

test("383000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 380001
    }
    expect(calc(options)).toBe(1970)
})

test("383000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 380001
    }
    expect(calc(options)).toBe(350)
})

test("383000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 380001
    }
    expect(calc(options)).toBe(79900)
})

test("386000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 383001
    }
    expect(calc(options)).toBe(15280)
})

test("386000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 383001
    }
    expect(calc(options)).toBe(12050)
})

test("386000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 383001
    }
    expect(calc(options)).toBe(8810)
})

test("386000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 383001
    }
    expect(calc(options)).toBe(6940)
})

test("386000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 383001
    }
    expect(calc(options)).toBe(5320)
})

test("386000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 383001
    }
    expect(calc(options)).toBe(3710)
})

test("386000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 383001
    }
    expect(calc(options)).toBe(2090)
})

test("386000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 383001
    }
    expect(calc(options)).toBe(470)
})

test("386000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 383001
    }
    expect(calc(options)).toBe(81400)
})

test("389000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 386001
    }
    expect(calc(options)).toBe(15530)
})

test("389000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 386001
    }
    expect(calc(options)).toBe(12290)
})

test("389000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 386001
    }
    expect(calc(options)).toBe(9060)
})

test("389000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 386001
    }
    expect(calc(options)).toBe(7070)
})

test("389000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 386001
    }
    expect(calc(options)).toBe(5440)
})

test("389000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 386001
    }
    expect(calc(options)).toBe(3830)
})

test("389000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 386001
    }
    expect(calc(options)).toBe(2220)
})

test("389000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 386001
    }
    expect(calc(options)).toBe(590)
})

test("389000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 386001
    }
    expect(calc(options)).toBe(83100)
})

test("392000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 389001
    }
    expect(calc(options)).toBe(15770)
})

test("392000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 389001
    }
    expect(calc(options)).toBe(12540)
})

test("392000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 389001
    }
    expect(calc(options)).toBe(9300)
})

test("392000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 389001
    }
    expect(calc(options)).toBe(7190)
})

test("392000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 389001
    }
    expect(calc(options)).toBe(5560)
})

test("392000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 389001
    }
    expect(calc(options)).toBe(3950)
})

test("392000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 389001
    }
    expect(calc(options)).toBe(2340)
})

test("392000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 389001
    }
    expect(calc(options)).toBe(710)
})

test("392000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 389001
    }
    expect(calc(options)).toBe(84700)
})

test("395000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 392001
    }
    expect(calc(options)).toBe(16020)
})

test("395000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 392001
    }
    expect(calc(options)).toBe(12780)
})

test("395000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 392001
    }
    expect(calc(options)).toBe(9550)
})

test("395000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 392001
    }
    expect(calc(options)).toBe(7310)
})

test("395000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 392001
    }
    expect(calc(options)).toBe(5690)
})

test("395000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 392001
    }
    expect(calc(options)).toBe(4070)
})

test("395000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 392001
    }
    expect(calc(options)).toBe(2460)
})

test("395000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 392001
    }
    expect(calc(options)).toBe(840)
})

test("395000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 392001
    }
    expect(calc(options)).toBe(86500)
})

test("398000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 395001
    }
    expect(calc(options)).toBe(16260)
})

test("398000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 395001
    }
    expect(calc(options)).toBe(13030)
})

test("398000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 395001
    }
    expect(calc(options)).toBe(9790)
})

test("398000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 395001
    }
    expect(calc(options)).toBe(7430)
})

test("398000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 395001
    }
    expect(calc(options)).toBe(5810)
})

test("398000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 395001
    }
    expect(calc(options)).toBe(4200)
})

test("398000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 395001
    }
    expect(calc(options)).toBe(2580)
})

test("398000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 395001
    }
    expect(calc(options)).toBe(960)
})

test("398000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 395001
    }
    expect(calc(options)).toBe(88200)
})

test("401000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 398001
    }
    expect(calc(options)).toBe(16510)
})

test("401000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 398001
    }
    expect(calc(options)).toBe(13270)
})

test("401000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 398001
    }
    expect(calc(options)).toBe(10040)
})

test("401000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 398001
    }
    expect(calc(options)).toBe(7560)
})

test("401000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 398001
    }
    expect(calc(options)).toBe(5930)
})

test("401000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 398001
    }
    expect(calc(options)).toBe(4320)
})

test("401000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 398001
    }
    expect(calc(options)).toBe(2710)
})

test("401000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 398001
    }
    expect(calc(options)).toBe(1080)
})

test("401000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 398001
    }
    expect(calc(options)).toBe(89800)
})

test("404000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 401001
    }
    expect(calc(options)).toBe(16750)
})

test("404000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 401001
    }
    expect(calc(options)).toBe(13520)
})

test("404000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 401001
    }
    expect(calc(options)).toBe(10280)
})

test("404000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 401001
    }
    expect(calc(options)).toBe(7680)
})

test("404000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 401001
    }
    expect(calc(options)).toBe(6050)
})

test("404000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 401001
    }
    expect(calc(options)).toBe(4440)
})

test("404000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 401001
    }
    expect(calc(options)).toBe(2830)
})

test("404000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 401001
    }
    expect(calc(options)).toBe(1200)
})

test("404000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 401001
    }
    expect(calc(options)).toBe(91600)
})

test("407000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 404001
    }
    expect(calc(options)).toBe(17000)
})

test("407000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 404001
    }
    expect(calc(options)).toBe(13760)
})

test("407000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 404001
    }
    expect(calc(options)).toBe(10530)
})

test("407000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 404001
    }
    expect(calc(options)).toBe(7800)
})

test("407000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 404001
    }
    expect(calc(options)).toBe(6180)
})

test("407000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 404001
    }
    expect(calc(options)).toBe(4560)
})

test("407000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 404001
    }
    expect(calc(options)).toBe(2950)
})

test("407000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 404001
    }
    expect(calc(options)).toBe(1330)
})

test("407000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 404001
    }
    expect(calc(options)).toBe(93300)
})

test("410000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 407001
    }
    expect(calc(options)).toBe(17240)
})

test("410000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 407001
    }
    expect(calc(options)).toBe(14010)
})

test("410000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 407001
    }
    expect(calc(options)).toBe(10770)
})

test("410000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 407001
    }
    expect(calc(options)).toBe(7920)
})

test("410000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 407001
    }
    expect(calc(options)).toBe(6300)
})

test("410000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 407001
    }
    expect(calc(options)).toBe(4690)
})

test("410000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 407001
    }
    expect(calc(options)).toBe(3070)
})

test("410000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 407001
    }
    expect(calc(options)).toBe(1450)
})

test("410000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 407001
    }
    expect(calc(options)).toBe(95000)
})

test("413000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 410001
    }
    expect(calc(options)).toBe(17490)
})

test("413000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 410001
    }
    expect(calc(options)).toBe(14250)
})

test("413000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 410001
    }
    expect(calc(options)).toBe(11020)
})

test("413000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 410001
    }
    expect(calc(options)).toBe(8050)
})

test("413000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 410001
    }
    expect(calc(options)).toBe(6420)
})

test("413000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 410001
    }
    expect(calc(options)).toBe(4810)
})

test("413000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 410001
    }
    expect(calc(options)).toBe(3200)
})

test("413000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 410001
    }
    expect(calc(options)).toBe(1570)
})

test("413000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 410001
    }
    expect(calc(options)).toBe(96700)
})

test("416000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 413001
    }
    expect(calc(options)).toBe(17730)
})

test("416000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 413001
    }
    expect(calc(options)).toBe(14500)
})

test("416000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 413001
    }
    expect(calc(options)).toBe(11260)
})

test("416000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 413001
    }
    expect(calc(options)).toBe(8170)
})

test("416000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 413001
    }
    expect(calc(options)).toBe(6540)
})

test("416000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 413001
    }
    expect(calc(options)).toBe(4930)
})

test("416000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 413001
    }
    expect(calc(options)).toBe(3320)
})

test("416000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 413001
    }
    expect(calc(options)).toBe(1690)
})

test("416000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 413001
    }
    expect(calc(options)).toBe(98300)
})

test("419000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 416001
    }
    expect(calc(options)).toBe(17980)
})

test("419000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 416001
    }
    expect(calc(options)).toBe(14740)
})

test("419000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 416001
    }
    expect(calc(options)).toBe(11510)
})

test("419000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 416001
    }
    expect(calc(options)).toBe(8290)
})

test("419000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 416001
    }
    expect(calc(options)).toBe(6670)
})

test("419000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 416001
    }
    expect(calc(options)).toBe(5050)
})

test("419000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 416001
    }
    expect(calc(options)).toBe(3440)
})

test("419000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 416001
    }
    expect(calc(options)).toBe(1820)
})

test("419000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 416001
    }
    expect(calc(options)).toBe(100100)
})

test("422000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 419001
    }
    expect(calc(options)).toBe(18220)
})

test("422000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 419001
    }
    expect(calc(options)).toBe(14990)
})

test("422000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 419001
    }
    expect(calc(options)).toBe(11750)
})

test("422000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 419001
    }
    expect(calc(options)).toBe(8530)
})

test("422000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 419001
    }
    expect(calc(options)).toBe(6790)
})

test("422000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 419001
    }
    expect(calc(options)).toBe(5180)
})

test("422000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 419001
    }
    expect(calc(options)).toBe(3560)
})

test("422000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 419001
    }
    expect(calc(options)).toBe(1940)
})

test("422000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 419001
    }
    expect(calc(options)).toBe(101800)
})

test("425000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 422001
    }
    expect(calc(options)).toBe(18470)
})

test("425000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 422001
    }
    expect(calc(options)).toBe(15230)
})

test("425000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 422001
    }
    expect(calc(options)).toBe(12000)
})

test("425000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 422001
    }
    expect(calc(options)).toBe(8770)
})

test("425000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 422001
    }
    expect(calc(options)).toBe(6910)
})

test("425000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 422001
    }
    expect(calc(options)).toBe(5300)
})

test("425000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 422001
    }
    expect(calc(options)).toBe(3690)
})

test("425000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 422001
    }
    expect(calc(options)).toBe(2060)
})

test("425000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 422001
    }
    expect(calc(options)).toBe(103400)
})

test("428000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 425001
    }
    expect(calc(options)).toBe(18710)
})

test("428000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 425001
    }
    expect(calc(options)).toBe(15480)
})

test("428000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 425001
    }
    expect(calc(options)).toBe(12240)
})

test("428000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 425001
    }
    expect(calc(options)).toBe(9020)
})

test("428000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 425001
    }
    expect(calc(options)).toBe(7030)
})

test("428000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 425001
    }
    expect(calc(options)).toBe(5420)
})

test("428000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 425001
    }
    expect(calc(options)).toBe(3810)
})

test("428000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 425001
    }
    expect(calc(options)).toBe(2180)
})

test("428000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 425001
    }
    expect(calc(options)).toBe(105200)
})

test("431000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 428001
    }
    expect(calc(options)).toBe(18960)
})

test("431000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 428001
    }
    expect(calc(options)).toBe(15720)
})

test("431000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 428001
    }
    expect(calc(options)).toBe(12490)
})

test("431000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 428001
    }
    expect(calc(options)).toBe(9260)
})

test("431000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 428001
    }
    expect(calc(options)).toBe(7160)
})

test("431000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 428001
    }
    expect(calc(options)).toBe(5540)
})

test("431000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 428001
    }
    expect(calc(options)).toBe(3930)
})

test("431000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 428001
    }
    expect(calc(options)).toBe(2310)
})

test("431000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 428001
    }
    expect(calc(options)).toBe(106900)
})

test("434000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 431001
    }
    expect(calc(options)).toBe(19210)
})

test("434000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 431001
    }
    expect(calc(options)).toBe(15970)
})

test("434000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 431001
    }
    expect(calc(options)).toBe(12730)
})

test("434000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 431001
    }
    expect(calc(options)).toBe(9510)
})

test("434000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 431001
    }
    expect(calc(options)).toBe(7280)
})

test("434000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 431001
    }
    expect(calc(options)).toBe(5670)
})

test("434000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 431001
    }
    expect(calc(options)).toBe(4050)
})

test("434000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 431001
    }
    expect(calc(options)).toBe(2430)
})

test("434000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 431001
    }
    expect(calc(options)).toBe(108500)
})

test("437000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 434001
    }
    expect(calc(options)).toBe(19450)
})

test("437000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 434001
    }
    expect(calc(options)).toBe(16210)
})

test("437000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 434001
    }
    expect(calc(options)).toBe(12980)
})

test("437000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 434001
    }
    expect(calc(options)).toBe(9750)
})

test("437000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 434001
    }
    expect(calc(options)).toBe(7400)
})

test("437000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 434001
    }
    expect(calc(options)).toBe(5790)
})

test("437000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 434001
    }
    expect(calc(options)).toBe(4180)
})

test("437000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 434001
    }
    expect(calc(options)).toBe(2550)
})

test("437000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 434001
    }
    expect(calc(options)).toBe(110300)
})

test("440000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 437001
    }
    expect(calc(options)).toBe(19700)
})

test("440000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 437001
    }
    expect(calc(options)).toBe(16460)
})

test("440000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 437001
    }
    expect(calc(options)).toBe(13220)
})

test("440000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 437001
    }
    expect(calc(options)).toBe(10000)
})

test("440000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 437001
    }
    expect(calc(options)).toBe(7520)
})

test("440000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 437001
    }
    expect(calc(options)).toBe(5910)
})

test("440000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 437001
    }
    expect(calc(options)).toBe(4300)
})

test("440000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 437001
    }
    expect(calc(options)).toBe(2680)
})

test("440000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 437001
    }
    expect(calc(options)).toBe(112000)
})

test("443000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 440001
    }
    expect(calc(options)).toBe(20090)
})

test("443000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 440001
    }
    expect(calc(options)).toBe(16700)
})

test("443000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 440001
    }
    expect(calc(options)).toBe(13470)
})

test("443000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 440001
    }
    expect(calc(options)).toBe(10240)
})

test("443000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 440001
    }
    expect(calc(options)).toBe(7650)
})

test("443000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 440001
    }
    expect(calc(options)).toBe(6030)
})

test("443000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 440001
    }
    expect(calc(options)).toBe(4420)
})

test("443000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 440001
    }
    expect(calc(options)).toBe(2800)
})

test("443000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 440001
    }
    expect(calc(options)).toBe(113600)
})

test("446000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 443001
    }
    expect(calc(options)).toBe(20580)
})

test("446000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 443001
    }
    expect(calc(options)).toBe(16950)
})

test("446000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 443001
    }
    expect(calc(options)).toBe(13710)
})

test("446000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 443001
    }
    expect(calc(options)).toBe(10490)
})

test("446000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 443001
    }
    expect(calc(options)).toBe(7770)
})

test("446000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 443001
    }
    expect(calc(options)).toBe(6160)
})

test("446000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 443001
    }
    expect(calc(options)).toBe(4540)
})

test("446000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 443001
    }
    expect(calc(options)).toBe(2920)
})

test("446000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 443001
    }
    expect(calc(options)).toBe(115400)
})

test("449000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 446001
    }
    expect(calc(options)).toBe(21070)
})

test("449000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 446001
    }
    expect(calc(options)).toBe(17190)
})

test("449000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 446001
    }
    expect(calc(options)).toBe(13960)
})

test("449000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 446001
    }
    expect(calc(options)).toBe(10730)
})

test("449000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 446001
    }
    expect(calc(options)).toBe(7890)
})

test("449000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 446001
    }
    expect(calc(options)).toBe(6280)
})

test("449000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 446001
    }
    expect(calc(options)).toBe(4670)
})

test("449000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 446001
    }
    expect(calc(options)).toBe(3040)
})

test("449000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 446001
    }
    expect(calc(options)).toBe(117100)
})

test("452000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 449001
    }
    expect(calc(options)).toBe(21560)
})

test("452000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 449001
    }
    expect(calc(options)).toBe(17440)
})

test("452000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 449001
    }
    expect(calc(options)).toBe(14200)
})

test("452000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 449001
    }
    expect(calc(options)).toBe(10980)
})

test("452000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 449001
    }
    expect(calc(options)).toBe(8010)
})

test("452000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 449001
    }
    expect(calc(options)).toBe(6400)
})

test("452000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 449001
    }
    expect(calc(options)).toBe(4790)
})

test("452000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 449001
    }
    expect(calc(options)).toBe(3170)
})

test("452000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 449001
    }
    expect(calc(options)).toBe(118700)
})

test("455000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 452001
    }
    expect(calc(options)).toBe(22050)
})

test("455000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 452001
    }
    expect(calc(options)).toBe(17680)
})

test("455000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 452001
    }
    expect(calc(options)).toBe(14450)
})

test("455000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 452001
    }
    expect(calc(options)).toBe(11220)
})

test("455000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 452001
    }
    expect(calc(options)).toBe(8140)
})

test("455000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 452001
    }
    expect(calc(options)).toBe(6520)
})

test("455000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 452001
    }
    expect(calc(options)).toBe(4910)
})

test("455000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 452001
    }
    expect(calc(options)).toBe(3290)
})

test("455000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 452001
    }
    expect(calc(options)).toBe(120500)
})

test("458000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 455001
    }
    expect(calc(options)).toBe(22540)
})

test("458000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 455001
    }
    expect(calc(options)).toBe(17930)
})

test("458000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 455001
    }
    expect(calc(options)).toBe(14690)
})

test("458000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 455001
    }
    expect(calc(options)).toBe(11470)
})

test("458000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 455001
    }
    expect(calc(options)).toBe(8260)
})

test("458000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 455001
    }
    expect(calc(options)).toBe(6650)
})

test("458000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 455001
    }
    expect(calc(options)).toBe(5030)
})

test("458000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 455001
    }
    expect(calc(options)).toBe(3410)
})

test("458000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 455001
    }
    expect(calc(options)).toBe(122200)
})

test("461000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 458001
    }
    expect(calc(options)).toBe(23030)
})

test("461000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 458001
    }
    expect(calc(options)).toBe(18170)
})

test("461000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 458001
    }
    expect(calc(options)).toBe(14940)
})

test("461000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 458001
    }
    expect(calc(options)).toBe(11710)
})

test("461000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 458001
    }
    expect(calc(options)).toBe(8470)
})

test("461000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 458001
    }
    expect(calc(options)).toBe(6770)
})

test("461000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 458001
    }
    expect(calc(options)).toBe(5160)
})

test("461000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 458001
    }
    expect(calc(options)).toBe(3530)
})

test("461000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 458001
    }
    expect(calc(options)).toBe(123800)
})

test("464000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 461001
    }
    expect(calc(options)).toBe(23520)
})

test("464000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 461001
    }
    expect(calc(options)).toBe(18420)
})

test("464000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 461001
    }
    expect(calc(options)).toBe(15180)
})

test("464000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 461001
    }
    expect(calc(options)).toBe(11960)
})

test("464000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 461001
    }
    expect(calc(options)).toBe(8720)
})

test("464000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 461001
    }
    expect(calc(options)).toBe(6890)
})

test("464000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 461001
    }
    expect(calc(options)).toBe(5280)
})

test("464000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 461001
    }
    expect(calc(options)).toBe(3660)
})

test("464000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 461001
    }
    expect(calc(options)).toBe(125600)
})

test("467000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 464001
    }
    expect(calc(options)).toBe(24010)
})

test("467000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 464001
    }
    expect(calc(options)).toBe(18660)
})

test("467000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 464001
    }
    expect(calc(options)).toBe(15430)
})

test("467000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 464001
    }
    expect(calc(options)).toBe(12200)
})

test("467000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 464001
    }
    expect(calc(options)).toBe(8960)
})

test("467000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 464001
    }
    expect(calc(options)).toBe(7010)
})

test("467000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 464001
    }
    expect(calc(options)).toBe(5400)
})

test("467000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 464001
    }
    expect(calc(options)).toBe(3780)
})

test("467000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 464001
    }
    expect(calc(options)).toBe(127300)
})

test("470000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 467001
    }
    expect(calc(options)).toBe(24500)
})

test("470000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 467001
    }
    expect(calc(options)).toBe(18910)
})

test("470000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 467001
    }
    expect(calc(options)).toBe(15670)
})

test("470000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 467001
    }
    expect(calc(options)).toBe(12450)
})

test("470000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 467001
    }
    expect(calc(options)).toBe(9210)
})

test("470000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 467001
    }
    expect(calc(options)).toBe(7140)
})

test("470000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 467001
    }
    expect(calc(options)).toBe(5520)
})

test("470000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 467001
    }
    expect(calc(options)).toBe(3900)
})

test("470000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 467001
    }
    expect(calc(options)).toBe(129000)
})

test("473000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 470001
    }
    expect(calc(options)).toBe(24990)
})

test("473000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 470001
    }
    expect(calc(options)).toBe(19150)
})

test("473000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 470001
    }
    expect(calc(options)).toBe(15920)
})

test("473000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 470001
    }
    expect(calc(options)).toBe(12690)
})

test("473000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 470001
    }
    expect(calc(options)).toBe(9450)
})

test("473000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 470001
    }
    expect(calc(options)).toBe(7260)
})

test("473000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 470001
    }
    expect(calc(options)).toBe(5650)
})

test("473000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 470001
    }
    expect(calc(options)).toBe(4020)
})

test("473000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 470001
    }
    expect(calc(options)).toBe(130700)
})

test("476000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 473001
    }
    expect(calc(options)).toBe(25480)
})

test("476000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 473001
    }
    expect(calc(options)).toBe(19400)
})

test("476000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 473001
    }
    expect(calc(options)).toBe(16160)
})

test("476000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 473001
    }
    expect(calc(options)).toBe(12940)
})

test("476000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 473001
    }
    expect(calc(options)).toBe(9700)
})

test("476000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 473001
    }
    expect(calc(options)).toBe(7380)
})

test("476000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 473001
    }
    expect(calc(options)).toBe(5770)
})

test("476000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 473001
    }
    expect(calc(options)).toBe(4150)
})

test("476000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 473001
    }
    expect(calc(options)).toBe(132300)
})

test("479000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 476001
    }
    expect(calc(options)).toBe(25970)
})

test("479000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 476001
    }
    expect(calc(options)).toBe(19640)
})

test("479000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 476001
    }
    expect(calc(options)).toBe(16410)
})

test("479000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 476001
    }
    expect(calc(options)).toBe(13180)
})

test("479000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 476001
    }
    expect(calc(options)).toBe(9940)
})

test("479000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 476001
    }
    expect(calc(options)).toBe(7500)
})

test("479000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 476001
    }
    expect(calc(options)).toBe(5890)
})

test("479000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 476001
    }
    expect(calc(options)).toBe(4270)
})

test("479000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 476001
    }
    expect(calc(options)).toBe(134000)
})

test("482000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 479001
    }
    expect(calc(options)).toBe(26460)
})

test("482000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 479001
    }
    expect(calc(options)).toBe(20000)
})

test("482000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 479001
    }
    expect(calc(options)).toBe(16650)
})

test("482000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 479001
    }
    expect(calc(options)).toBe(13430)
})

test("482000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 479001
    }
    expect(calc(options)).toBe(10190)
})

test("482000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 479001
    }
    expect(calc(options)).toBe(7630)
})

test("482000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 479001
    }
    expect(calc(options)).toBe(6010)
})

test("482000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 479001
    }
    expect(calc(options)).toBe(4390)
})

test("482000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 479001
    }
    expect(calc(options)).toBe(135600)
})

test("485000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 482001
    }
    expect(calc(options)).toBe(26950)
})

test("485000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 482001
    }
    expect(calc(options)).toBe(20490)
})

test("485000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 482001
    }
    expect(calc(options)).toBe(16900)
})

test("485000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 482001
    }
    expect(calc(options)).toBe(13670)
})

test("485000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 482001
    }
    expect(calc(options)).toBe(10430)
})

test("485000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 482001
    }
    expect(calc(options)).toBe(7750)
})

test("485000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 482001
    }
    expect(calc(options)).toBe(6140)
})

test("485000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 482001
    }
    expect(calc(options)).toBe(4510)
})

test("485000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 482001
    }
    expect(calc(options)).toBe(137200)
})

test("488000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 485001
    }
    expect(calc(options)).toBe(27440)
})

test("488000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 485001
    }
    expect(calc(options)).toBe(20980)
})

test("488000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 485001
    }
    expect(calc(options)).toBe(17140)
})

test("488000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 485001
    }
    expect(calc(options)).toBe(13920)
})

test("488000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 485001
    }
    expect(calc(options)).toBe(10680)
})

test("488000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 485001
    }
    expect(calc(options)).toBe(7870)
})

test("488000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 485001
    }
    expect(calc(options)).toBe(6260)
})

test("488000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 485001
    }
    expect(calc(options)).toBe(4640)
})

test("488000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 485001
    }
    expect(calc(options)).toBe(138800)
})

test("491000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 488001
    }
    expect(calc(options)).toBe(27930)
})

test("491000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 488001
    }
    expect(calc(options)).toBe(21470)
})

test("491000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 488001
    }
    expect(calc(options)).toBe(17390)
})

test("491000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 488001
    }
    expect(calc(options)).toBe(14160)
})

test("491000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 488001
    }
    expect(calc(options)).toBe(10920)
})

test("491000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 488001
    }
    expect(calc(options)).toBe(7990)
})

test("491000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 488001
    }
    expect(calc(options)).toBe(6380)
})

test("491000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 488001
    }
    expect(calc(options)).toBe(4760)
})

test("491000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 488001
    }
    expect(calc(options)).toBe(140400)
})

test("494000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 491001
    }
    expect(calc(options)).toBe(28420)
})

test("494000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 491001
    }
    expect(calc(options)).toBe(21960)
})

test("494000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 491001
    }
    expect(calc(options)).toBe(17630)
})

test("494000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 491001
    }
    expect(calc(options)).toBe(14410)
})

test("494000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 491001
    }
    expect(calc(options)).toBe(11170)
})

test("494000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 491001
    }
    expect(calc(options)).toBe(8120)
})

test("494000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 491001
    }
    expect(calc(options)).toBe(6500)
})

test("494000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 491001
    }
    expect(calc(options)).toBe(4880)
})

test("494000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 491001
    }
    expect(calc(options)).toBe(142000)
})

test("497000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 494001
    }
    expect(calc(options)).toBe(28910)
})

test("497000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 494001
    }
    expect(calc(options)).toBe(22450)
})

test("497000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 494001
    }
    expect(calc(options)).toBe(17880)
})

test("497000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 494001
    }
    expect(calc(options)).toBe(14650)
})

test("497000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 494001
    }
    expect(calc(options)).toBe(11410)
})

test("497000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 494001
    }
    expect(calc(options)).toBe(8240)
})

test("497000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 494001
    }
    expect(calc(options)).toBe(6630)
})

test("497000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 494001
    }
    expect(calc(options)).toBe(5000)
})

test("497000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 494001
    }
    expect(calc(options)).toBe(143700)
})

test("500000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 497001
    }
    expect(calc(options)).toBe(29400)
})

test("500000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 497001
    }
    expect(calc(options)).toBe(22940)
})

test("500000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 497001
    }
    expect(calc(options)).toBe(18120)
})

test("500000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 497001
    }
    expect(calc(options)).toBe(14900)
})

test("500000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 497001
    }
    expect(calc(options)).toBe(11660)
})

test("500000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 497001
    }
    expect(calc(options)).toBe(8420)
})

test("500000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 497001
    }
    expect(calc(options)).toBe(6750)
})

test("500000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 497001
    }
    expect(calc(options)).toBe(5130)
})

test("500000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 497001
    }
    expect(calc(options)).toBe(145200)
})

test("503000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 500001
    }
    expect(calc(options)).toBe(29890)
})

test("503000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 500001
    }
    expect(calc(options)).toBe(23430)
})

test("503000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 500001
    }
    expect(calc(options)).toBe(18370)
})

test("503000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 500001
    }
    expect(calc(options)).toBe(15140)
})

test("503000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 500001
    }
    expect(calc(options)).toBe(11900)
})

test("503000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 500001
    }
    expect(calc(options)).toBe(8670)
})

test("503000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 500001
    }
    expect(calc(options)).toBe(6870)
})

test("503000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 500001
    }
    expect(calc(options)).toBe(5250)
})

test("503000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 500001
    }
    expect(calc(options)).toBe(146800)
})

test("506000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 503001
    }
    expect(calc(options)).toBe(30380)
})

test("506000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 503001
    }
    expect(calc(options)).toBe(23920)
})

test("506000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 503001
    }
    expect(calc(options)).toBe(18610)
})

test("506000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 503001
    }
    expect(calc(options)).toBe(15390)
})

test("506000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 503001
    }
    expect(calc(options)).toBe(12150)
})

test("506000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 503001
    }
    expect(calc(options)).toBe(8910)
})

test("506000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 503001
    }
    expect(calc(options)).toBe(6990)
})

test("506000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 503001
    }
    expect(calc(options)).toBe(5370)
})

test("506000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 503001
    }
    expect(calc(options)).toBe(148500)
})

test("509000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 506001
    }
    expect(calc(options)).toBe(30880)
})

test("509000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 506001
    }
    expect(calc(options)).toBe(24410)
})

test("509000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 506001
    }
    expect(calc(options)).toBe(18860)
})

test("509000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 506001
    }
    expect(calc(options)).toBe(15630)
})

test("509000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 506001
    }
    expect(calc(options)).toBe(12390)
})

test("509000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 506001
    }
    expect(calc(options)).toBe(9160)
})

test("509000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 506001
    }
    expect(calc(options)).toBe(7120)
})

test("509000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 506001
    }
    expect(calc(options)).toBe(5490)
})

test("509000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 506001
    }
    expect(calc(options)).toBe(150100)
})

test("512000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 509001
    }
    expect(calc(options)).toBe(31370)
})

test("512000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 509001
    }
    expect(calc(options)).toBe(24900)
})

test("512000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 509001
    }
    expect(calc(options)).toBe(19100)
})

test("512000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 509001
    }
    expect(calc(options)).toBe(15880)
})

test("512000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 509001
    }
    expect(calc(options)).toBe(12640)
})

test("512000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 509001
    }
    expect(calc(options)).toBe(9400)
})

test("512000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 509001
    }
    expect(calc(options)).toBe(7240)
})

test("512000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 509001
    }
    expect(calc(options)).toBe(5620)
})

test("512000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 509001
    }
    expect(calc(options)).toBe(151600)
})

test("515000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 512001
    }
    expect(calc(options)).toBe(31860)
})

test("515000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 512001
    }
    expect(calc(options)).toBe(25390)
})

test("515000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 512001
    }
    expect(calc(options)).toBe(19350)
})

test("515000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 512001
    }
    expect(calc(options)).toBe(16120)
})

test("515000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 512001
    }
    expect(calc(options)).toBe(12890)
})

test("515000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 512001
    }
    expect(calc(options)).toBe(9650)
})

test("515000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 512001
    }
    expect(calc(options)).toBe(7360)
})

test("515000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 512001
    }
    expect(calc(options)).toBe(5740)
})

test("515000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 512001
    }
    expect(calc(options)).toBe(153300)
})

test("518000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 515001
    }
    expect(calc(options)).toBe(32350)
})

test("518000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 515001
    }
    expect(calc(options)).toBe(25880)
})

test("518000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 515001
    }
    expect(calc(options)).toBe(19590)
})

test("518000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 515001
    }
    expect(calc(options)).toBe(16370)
})

test("518000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 515001
    }
    expect(calc(options)).toBe(13130)
})

test("518000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 515001
    }
    expect(calc(options)).toBe(9890)
})

test("518000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 515001
    }
    expect(calc(options)).toBe(7480)
})

test("518000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 515001
    }
    expect(calc(options)).toBe(5860)
})

test("518000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 515001
    }
    expect(calc(options)).toBe(154900)
})

test("521000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 518001
    }
    expect(calc(options)).toBe(32840)
})

test("521000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 518001
    }
    expect(calc(options)).toBe(26370)
})

test("521000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 518001
    }
    expect(calc(options)).toBe(19900)
})

test("521000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 518001
    }
    expect(calc(options)).toBe(16610)
})

test("521000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 518001
    }
    expect(calc(options)).toBe(13380)
})

test("521000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 518001
    }
    expect(calc(options)).toBe(10140)
})

test("521000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 518001
    }
    expect(calc(options)).toBe(7610)
})

test("521000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 518001
    }
    expect(calc(options)).toBe(5980)
})

test("521000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 518001
    }
    expect(calc(options)).toBe(156500)
})

test("524000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 521001
    }
    expect(calc(options)).toBe(33330)
})

test("524000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 521001
    }
    expect(calc(options)).toBe(26860)
})

test("524000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 521001
    }
    expect(calc(options)).toBe(20390)
})

test("524000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 521001
    }
    expect(calc(options)).toBe(16860)
})

test("524000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 521001
    }
    expect(calc(options)).toBe(13620)
})

test("524000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 521001
    }
    expect(calc(options)).toBe(10380)
})

test("524000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 521001
    }
    expect(calc(options)).toBe(7730)
})

test("524000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 521001
    }
    expect(calc(options)).toBe(6110)
})

test("524000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 521001
    }
    expect(calc(options)).toBe(158100)
})

test("527000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 524001
    }
    expect(calc(options)).toBe(33820)
})

test("527000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 524001
    }
    expect(calc(options)).toBe(27350)
})

test("527000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 524001
    }
    expect(calc(options)).toBe(20880)
})

test("527000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 524001
    }
    expect(calc(options)).toBe(17100)
})

test("527000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 524001
    }
    expect(calc(options)).toBe(13870)
})

test("527000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 524001
    }
    expect(calc(options)).toBe(10630)
})

test("527000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 524001
    }
    expect(calc(options)).toBe(7850)
})

test("527000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 524001
    }
    expect(calc(options)).toBe(6230)
})

test("527000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 524001
    }
    expect(calc(options)).toBe(159600)
})

test("530000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 527001
    }
    expect(calc(options)).toBe(34310)
})

test("530000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 527001
    }
    expect(calc(options)).toBe(27840)
})

test("530000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 527001
    }
    expect(calc(options)).toBe(21370)
})

test("530000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 527001
    }
    expect(calc(options)).toBe(17350)
})

test("530000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 527001
    }
    expect(calc(options)).toBe(14110)
})

test("530000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 527001
    }
    expect(calc(options)).toBe(10870)
})

test("530000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 527001
    }
    expect(calc(options)).toBe(7970)
})

test("530000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 527001
    }
    expect(calc(options)).toBe(6350)
})

test("530000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 527001
    }
    expect(calc(options)).toBe(161000)
})

test("533000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 530001
    }
    expect(calc(options)).toBe(34800)
})

test("533000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 530001
    }
    expect(calc(options)).toBe(28330)
})

test("533000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 530001
    }
    expect(calc(options)).toBe(21860)
})

test("533000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 530001
    }
    expect(calc(options)).toBe(17590)
})

test("533000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 530001
    }
    expect(calc(options)).toBe(14360)
})

test("533000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 530001
    }
    expect(calc(options)).toBe(11120)
})

test("533000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 530001
    }
    expect(calc(options)).toBe(8100)
})

test("533000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 530001
    }
    expect(calc(options)).toBe(6470)
})

test("533000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 530001
    }
    expect(calc(options)).toBe(162500)
})

test("536000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 533001
    }
    expect(calc(options)).toBe(35290)
})

test("536000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 533001
    }
    expect(calc(options)).toBe(28820)
})

test("536000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 533001
    }
    expect(calc(options)).toBe(22350)
})

test("536000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 533001
    }
    expect(calc(options)).toBe(17840)
})

test("536000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 533001
    }
    expect(calc(options)).toBe(14600)
})

test("536000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 533001
    }
    expect(calc(options)).toBe(11360)
})

test("536000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 533001
    }
    expect(calc(options)).toBe(8220)
})

test("536000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 533001
    }
    expect(calc(options)).toBe(6600)
})

test("536000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 533001
    }
    expect(calc(options)).toBe(164000)
})

test("539000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 536001
    }
    expect(calc(options)).toBe(35780)
})

test("539000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 536001
    }
    expect(calc(options)).toBe(29310)
})

test("539000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 536001
    }
    expect(calc(options)).toBe(22840)
})

test("539000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 536001
    }
    expect(calc(options)).toBe(18080)
})

test("539000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 536001
    }
    expect(calc(options)).toBe(14850)
})

test("539000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 536001
    }
    expect(calc(options)).toBe(11610)
})

test("539000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 536001
    }
    expect(calc(options)).toBe(8380)
})

test("539000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 536001
    }
    expect(calc(options)).toBe(6720)
})

test("539000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 536001
    }
    expect(calc(options)).toBe(165400)
})

test("542000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 539001
    }
    expect(calc(options)).toBe(36270)
})

test("542000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 539001
    }
    expect(calc(options)).toBe(29800)
})

test("542000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 539001
    }
    expect(calc(options)).toBe(23330)
})

test("542000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 539001
    }
    expect(calc(options)).toBe(18330)
})

test("542000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 539001
    }
    expect(calc(options)).toBe(15090)
})

test("542000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 539001
    }
    expect(calc(options)).toBe(11850)
})

test("542000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 539001
    }
    expect(calc(options)).toBe(8630)
})

test("542000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 539001
    }
    expect(calc(options)).toBe(6840)
})

test("542000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 539001
    }
    expect(calc(options)).toBe(166900)
})

test("545000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 542001
    }
    expect(calc(options)).toBe(36760)
})

test("545000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 542001
    }
    expect(calc(options)).toBe(30290)
})

test("545000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 542001
    }
    expect(calc(options)).toBe(23820)
})

test("545000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 542001
    }
    expect(calc(options)).toBe(18570)
})

test("545000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 542001
    }
    expect(calc(options)).toBe(15340)
})

test("545000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 542001
    }
    expect(calc(options)).toBe(12100)
})

test("545000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 542001
    }
    expect(calc(options)).toBe(8870)
})

test("545000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 542001
    }
    expect(calc(options)).toBe(6960)
})

test("545000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 542001
    }
    expect(calc(options)).toBe(168400)
})

test("548000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 545001
    }
    expect(calc(options)).toBe(37250)
})

test("548000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 545001
    }
    expect(calc(options)).toBe(30780)
})

test("548000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 545001
    }
    expect(calc(options)).toBe(24310)
})

test("548000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 545001
    }
    expect(calc(options)).toBe(18820)
})

test("548000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 545001
    }
    expect(calc(options)).toBe(15580)
})

test("548000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 545001
    }
    expect(calc(options)).toBe(12340)
})

test("548000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 545001
    }
    expect(calc(options)).toBe(9120)
})

test("548000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 545001
    }
    expect(calc(options)).toBe(7090)
})

test("548000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 545001
    }
    expect(calc(options)).toBe(169900)
})

test("551000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 548001
    }
    expect(calc(options)).toBe(37740)
})

test("551000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 548001
    }
    expect(calc(options)).toBe(31270)
})

test("551000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 548001
    }
    expect(calc(options)).toBe(24800)
})

test("551000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 548001
    }
    expect(calc(options)).toBe(19060)
})

test("551000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 548001
    }
    expect(calc(options)).toBe(15830)
})

test("551000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 548001
    }
    expect(calc(options)).toBe(12590)
})

test("551000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 548001
    }
    expect(calc(options)).toBe(9360)
})

test("551000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 548001
    }
    expect(calc(options)).toBe(7210)
})

test("551000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 548001
    }
    expect(calc(options)).toBe(171300)
})

test("554000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 551001
    }
    expect(calc(options)).toBe(38280)
})

test("554000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 551001
    }
    expect(calc(options)).toBe(31810)
})

test("554000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 551001
    }
    expect(calc(options)).toBe(25340)
})

test("554000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 551001
    }
    expect(calc(options)).toBe(19330)
})

test("554000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 551001
    }
    expect(calc(options)).toBe(16100)
})

test("554000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 551001
    }
    expect(calc(options)).toBe(12860)
})

test("554000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 551001
    }
    expect(calc(options)).toBe(9630)
})

test("554000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 551001
    }
    expect(calc(options)).toBe(7350)
})

test("554000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 551001
    }
    expect(calc(options)).toBe(172800)
})

test("557000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 554001
    }
    expect(calc(options)).toBe(38830)
})

test("557000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 554001
    }
    expect(calc(options)).toBe(32370)
})

test("557000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 554001
    }
    expect(calc(options)).toBe(25890)
})

test("557000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 554001
    }
    expect(calc(options)).toBe(19600)
})

test("557000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 554001
    }
    expect(calc(options)).toBe(16380)
})

test("557000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 554001
    }
    expect(calc(options)).toBe(13140)
})

test("557000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 554001
    }
    expect(calc(options)).toBe(9900)
})

test("557000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 554001
    }
    expect(calc(options)).toBe(7480)
})

test("557000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 554001
    }
    expect(calc(options)).toBe(174300)
})

test("560000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 557001
    }
    expect(calc(options)).toBe(39380)
})

test("560000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 557001
    }
    expect(calc(options)).toBe(32920)
})

test("560000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 557001
    }
    expect(calc(options)).toBe(26440)
})

test("560000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 557001
    }
    expect(calc(options)).toBe(19980)
})

test("560000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 557001
    }
    expect(calc(options)).toBe(16650)
})

test("560000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 557001
    }
    expect(calc(options)).toBe(13420)
})

test("560000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 557001
    }
    expect(calc(options)).toBe(10180)
})

test("560000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 557001
    }
    expect(calc(options)).toBe(7630)
})

test("560000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 557001
    }
    expect(calc(options)).toBe(175700)
})

test("563000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 560001
    }
    expect(calc(options)).toBe(39930)
})

test("563000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 560001
    }
    expect(calc(options)).toBe(33470)
})

test("563000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 560001
    }
    expect(calc(options)).toBe(27000)
})

test("563000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 560001
    }
    expect(calc(options)).toBe(20530)
})

test("563000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 560001
    }
    expect(calc(options)).toBe(16930)
})

test("563000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 560001
    }
    expect(calc(options)).toBe(13690)
})

test("563000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 560001
    }
    expect(calc(options)).toBe(10460)
})

test("563000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 560001
    }
    expect(calc(options)).toBe(7760)
})

test("563000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 560001
    }
    expect(calc(options)).toBe(177200)
})

test("566000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 563001
    }
    expect(calc(options)).toBe(40480)
})

test("566000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 563001
    }
    expect(calc(options)).toBe(34020)
})

test("566000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 563001
    }
    expect(calc(options)).toBe(27550)
})

test("566000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 563001
    }
    expect(calc(options)).toBe(21080)
})

test("566000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 563001
    }
    expect(calc(options)).toBe(17200)
})

test("566000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 563001
    }
    expect(calc(options)).toBe(13970)
})

test("566000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 563001
    }
    expect(calc(options)).toBe(10730)
})

test("566000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 563001
    }
    expect(calc(options)).toBe(7900)
})

test("566000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 563001
    }
    expect(calc(options)).toBe(178700)
})

test("569000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 566001
    }
    expect(calc(options)).toBe(41030)
})

test("569000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 566001
    }
    expect(calc(options)).toBe(34570)
})

test("569000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 566001
    }
    expect(calc(options)).toBe(28100)
})

test("569000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 566001
    }
    expect(calc(options)).toBe(21630)
})

test("569000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 566001
    }
    expect(calc(options)).toBe(17480)
})

test("569000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 566001
    }
    expect(calc(options)).toBe(14240)
})

test("569000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 566001
    }
    expect(calc(options)).toBe(11010)
})

test("569000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 566001
    }
    expect(calc(options)).toBe(8040)
})

test("569000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 566001
    }
    expect(calc(options)).toBe(180100)
})

test("572000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 569001
    }
    expect(calc(options)).toBe(41590)
})

test("572000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 569001
    }
    expect(calc(options)).toBe(35120)
})

test("572000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 569001
    }
    expect(calc(options)).toBe(28650)
})

test("572000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 569001
    }
    expect(calc(options)).toBe(22190)
})

test("572000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 569001
    }
    expect(calc(options)).toBe(17760)
})

test("572000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 569001
    }
    expect(calc(options)).toBe(14520)
})

test("572000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 569001
    }
    expect(calc(options)).toBe(11280)
})

test("572000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 569001
    }
    expect(calc(options)).toBe(8180)
})

test("572000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 569001
    }
    expect(calc(options)).toBe(181600)
})

test("575000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 572001
    }
    expect(calc(options)).toBe(42140)
})

test("575000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 572001
    }
    expect(calc(options)).toBe(35670)
})

test("575000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 572001
    }
    expect(calc(options)).toBe(29200)
})

test("575000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 572001
    }
    expect(calc(options)).toBe(22740)
})

test("575000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 572001
    }
    expect(calc(options)).toBe(18030)
})

test("575000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 572001
    }
    expect(calc(options)).toBe(14790)
})

test("575000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 572001
    }
    expect(calc(options)).toBe(11560)
})

test("575000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 572001
    }
    expect(calc(options)).toBe(8330)
})

test("575000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 572001
    }
    expect(calc(options)).toBe(183100)
})

test("578000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 575001
    }
    expect(calc(options)).toBe(42690)
})

test("578000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 575001
    }
    expect(calc(options)).toBe(36230)
})

test("578000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 575001
    }
    expect(calc(options)).toBe(29750)
})

test("578000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 575001
    }
    expect(calc(options)).toBe(23290)
})

test("578000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 575001
    }
    expect(calc(options)).toBe(18310)
})

test("578000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 575001
    }
    expect(calc(options)).toBe(15070)
})

test("578000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 575001
    }
    expect(calc(options)).toBe(11830)
})

test("578000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 575001
    }
    expect(calc(options)).toBe(8610)
})

test("578000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 575001
    }
    expect(calc(options)).toBe(184600)
})

test("581000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 578001
    }
    expect(calc(options)).toBe(43240)
})

test("581000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 578001
    }
    expect(calc(options)).toBe(36780)
})

test("581000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 578001
    }
    expect(calc(options)).toBe(30300)
})

test("581000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 578001
    }
    expect(calc(options)).toBe(23840)
})

test("581000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 578001
    }
    expect(calc(options)).toBe(18580)
})

test("581000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 578001
    }
    expect(calc(options)).toBe(15350)
})

test("581000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 578001
    }
    expect(calc(options)).toBe(12110)
})

test("581000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 578001
    }
    expect(calc(options)).toBe(8880)
})

test("581000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 578001
    }
    expect(calc(options)).toBe(186000)
})

test("584000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 581001
    }
    expect(calc(options)).toBe(43790)
})

test("584000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 581001
    }
    expect(calc(options)).toBe(37330)
})

test("584000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 581001
    }
    expect(calc(options)).toBe(30850)
})

test("584000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 581001
    }
    expect(calc(options)).toBe(24390)
})

test("584000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 581001
    }
    expect(calc(options)).toBe(18860)
})

test("584000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 581001
    }
    expect(calc(options)).toBe(15620)
})

test("584000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 581001
    }
    expect(calc(options)).toBe(12380)
})

test("584000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 581001
    }
    expect(calc(options)).toBe(9160)
})

test("584000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 581001
    }
    expect(calc(options)).toBe(187500)
})

test("587000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 584001
    }
    expect(calc(options)).toBe(44340)
})

test("587000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 584001
    }
    expect(calc(options)).toBe(37880)
})

test("587000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 584001
    }
    expect(calc(options)).toBe(31410)
})

test("587000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 584001
    }
    expect(calc(options)).toBe(24940)
})

test("587000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 584001
    }
    expect(calc(options)).toBe(19130)
})

test("587000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 584001
    }
    expect(calc(options)).toBe(15900)
})

test("587000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 584001
    }
    expect(calc(options)).toBe(12660)
})

test("587000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 584001
    }
    expect(calc(options)).toBe(9430)
})

test("587000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 584001
    }
    expect(calc(options)).toBe(189000)
})

test("590000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 587001
    }
    expect(calc(options)).toBe(44890)
})

test("590000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 587001
    }
    expect(calc(options)).toBe(38430)
})

test("590000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 587001
    }
    expect(calc(options)).toBe(31960)
})

test("590000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 587001
    }
    expect(calc(options)).toBe(25490)
})

test("590000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 587001
    }
    expect(calc(options)).toBe(19410)
})

test("590000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 587001
    }
    expect(calc(options)).toBe(16170)
})

test("590000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 587001
    }
    expect(calc(options)).toBe(12940)
})

test("590000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 587001
    }
    expect(calc(options)).toBe(9710)
})

test("590000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 587001
    }
    expect(calc(options)).toBe(190400)
})

test("593000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 590001
    }
    expect(calc(options)).toBe(45440)
})

test("593000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 590001
    }
    expect(calc(options)).toBe(38980)
})

test("593000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 590001
    }
    expect(calc(options)).toBe(32510)
})

test("593000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 590001
    }
    expect(calc(options)).toBe(26050)
})

test("593000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 590001
    }
    expect(calc(options)).toBe(19680)
})

test("593000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 590001
    }
    expect(calc(options)).toBe(16450)
})

test("593000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 590001
    }
    expect(calc(options)).toBe(13210)
})

test("593000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 590001
    }
    expect(calc(options)).toBe(9990)
})

test("593000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 590001
    }
    expect(calc(options)).toBe(191900)
})

test("596000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 593001
    }
    expect(calc(options)).toBe(46000)
})

test("596000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 593001
    }
    expect(calc(options)).toBe(39530)
})

test("596000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 593001
    }
    expect(calc(options)).toBe(33060)
})

test("596000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 593001
    }
    expect(calc(options)).toBe(26600)
})

test("596000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 593001
    }
    expect(calc(options)).toBe(20130)
})

test("596000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 593001
    }
    expect(calc(options)).toBe(16720)
})

test("596000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 593001
    }
    expect(calc(options)).toBe(13490)
})

test("596000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 593001
    }
    expect(calc(options)).toBe(10260)
})

test("596000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 593001
    }
    expect(calc(options)).toBe(193400)
})

test("599000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 596001
    }
    expect(calc(options)).toBe(46550)
})

test("599000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 596001
    }
    expect(calc(options)).toBe(40080)
})

test("599000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 596001
    }
    expect(calc(options)).toBe(33610)
})

test("599000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 596001
    }
    expect(calc(options)).toBe(27150)
})

test("599000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 596001
    }
    expect(calc(options)).toBe(20690)
})

test("599000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 596001
    }
    expect(calc(options)).toBe(17000)
})

test("599000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 596001
    }
    expect(calc(options)).toBe(13760)
})

test("599000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 596001
    }
    expect(calc(options)).toBe(10540)
})

test("599000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 596001
    }
    expect(calc(options)).toBe(194800)
})

test("602000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 599001
    }
    expect(calc(options)).toBe(47100)
})

test("602000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 599001
    }
    expect(calc(options)).toBe(40640)
})

test("602000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 599001
    }
    expect(calc(options)).toBe(34160)
})

test("602000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 599001
    }
    expect(calc(options)).toBe(27700)
})

test("602000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 599001
    }
    expect(calc(options)).toBe(21240)
})

test("602000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 599001
    }
    expect(calc(options)).toBe(17280)
})

test("602000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 599001
    }
    expect(calc(options)).toBe(14040)
})

test("602000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 599001
    }
    expect(calc(options)).toBe(10810)
})

test("602000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 599001
    }
    expect(calc(options)).toBe(196300)
})

test("605000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 602001
    }
    expect(calc(options)).toBe(47650)
})

test("605000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 602001
    }
    expect(calc(options)).toBe(41190)
})

test("605000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 602001
    }
    expect(calc(options)).toBe(34710)
})

test("605000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 602001
    }
    expect(calc(options)).toBe(28250)
})

test("605000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 602001
    }
    expect(calc(options)).toBe(21790)
})

test("605000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 602001
    }
    expect(calc(options)).toBe(17550)
})

test("605000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 602001
    }
    expect(calc(options)).toBe(14310)
})

test("605000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 602001
    }
    expect(calc(options)).toBe(11090)
})

test("605000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 602001
    }
    expect(calc(options)).toBe(197800)
})

test("608000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 605001
    }
    expect(calc(options)).toBe(48200)
})

test("608000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 605001
    }
    expect(calc(options)).toBe(41740)
})

test("608000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 605001
    }
    expect(calc(options)).toBe(35270)
})

test("608000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 605001
    }
    expect(calc(options)).toBe(28800)
})

test("608000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 605001
    }
    expect(calc(options)).toBe(22340)
})

test("608000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 605001
    }
    expect(calc(options)).toBe(17830)
})

test("608000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 605001
    }
    expect(calc(options)).toBe(14590)
})

test("608000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 605001
    }
    expect(calc(options)).toBe(11360)
})

test("608000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 605001
    }
    expect(calc(options)).toBe(199300)
})

test("611000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 608001
    }
    expect(calc(options)).toBe(48750)
})

test("611000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 608001
    }
    expect(calc(options)).toBe(42290)
})

test("611000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 608001
    }
    expect(calc(options)).toBe(35820)
})

test("611000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 608001
    }
    expect(calc(options)).toBe(29350)
})

test("611000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 608001
    }
    expect(calc(options)).toBe(22890)
})

test("611000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 608001
    }
    expect(calc(options)).toBe(18100)
})

test("611000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 608001
    }
    expect(calc(options)).toBe(14870)
})

test("611000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 608001
    }
    expect(calc(options)).toBe(11640)
})

test("611000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 608001
    }
    expect(calc(options)).toBe(200700)
})

test("614000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 611001
    }
    expect(calc(options)).toBe(49300)
})

test("614000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 611001
    }
    expect(calc(options)).toBe(42840)
})

test("614000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 611001
    }
    expect(calc(options)).toBe(36370)
})

test("614000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 611001
    }
    expect(calc(options)).toBe(29910)
})

test("614000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 611001
    }
    expect(calc(options)).toBe(23440)
})

test("614000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 611001
    }
    expect(calc(options)).toBe(18380)
})

test("614000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 611001
    }
    expect(calc(options)).toBe(15140)
})

test("614000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 611001
    }
    expect(calc(options)).toBe(11920)
})

test("614000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 611001
    }
    expect(calc(options)).toBe(202200)
})

test("617000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 614001
    }
    expect(calc(options)).toBe(49860)
})

test("617000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 614001
    }
    expect(calc(options)).toBe(43390)
})

test("617000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 614001
    }
    expect(calc(options)).toBe(36920)
})

test("617000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 614001
    }
    expect(calc(options)).toBe(30460)
})

test("617000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 614001
    }
    expect(calc(options)).toBe(23990)
})

test("617000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 614001
    }
    expect(calc(options)).toBe(18650)
})

test("617000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 614001
    }
    expect(calc(options)).toBe(15420)
})

test("617000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 614001
    }
    expect(calc(options)).toBe(12190)
})

test("617000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 614001
    }
    expect(calc(options)).toBe(203700)
})

test("620000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 617001
    }
    expect(calc(options)).toBe(50410)
})

test("620000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 617001
    }
    expect(calc(options)).toBe(43940)
})

test("620000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 617001
    }
    expect(calc(options)).toBe(37470)
})

test("620000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 617001
    }
    expect(calc(options)).toBe(31010)
})

test("620000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 617001
    }
    expect(calc(options)).toBe(24540)
})

test("620000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 617001
    }
    expect(calc(options)).toBe(18930)
})

test("620000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 617001
    }
    expect(calc(options)).toBe(15690)
})

test("620000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 617001
    }
    expect(calc(options)).toBe(12470)
})

test("620000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 617001
    }
    expect(calc(options)).toBe(205100)
})

test("623000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 620001
    }
    expect(calc(options)).toBe(50960)
})

test("623000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 620001
    }
    expect(calc(options)).toBe(44500)
})

test("623000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 620001
    }
    expect(calc(options)).toBe(38020)
})

test("623000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 620001
    }
    expect(calc(options)).toBe(31560)
})

test("623000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 620001
    }
    expect(calc(options)).toBe(25100)
})

test("623000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 620001
    }
    expect(calc(options)).toBe(19210)
})

test("623000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 620001
    }
    expect(calc(options)).toBe(15970)
})

test("623000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 620001
    }
    expect(calc(options)).toBe(12740)
})

test("623000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 620001
    }
    expect(calc(options)).toBe(206700)
})

test("626000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 623001
    }
    expect(calc(options)).toBe(51510)
})

test("626000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 623001
    }
    expect(calc(options)).toBe(45050)
})

test("626000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 623001
    }
    expect(calc(options)).toBe(38570)
})

test("626000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 623001
    }
    expect(calc(options)).toBe(32110)
})

test("626000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 623001
    }
    expect(calc(options)).toBe(25650)
})

test("626000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 623001
    }
    expect(calc(options)).toBe(19480)
})

test("626000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 623001
    }
    expect(calc(options)).toBe(16240)
})

test("626000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 623001
    }
    expect(calc(options)).toBe(13020)
})

test("626000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 623001
    }
    expect(calc(options)).toBe(208100)
})

test("629000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 626001
    }
    expect(calc(options)).toBe(52060)
})

test("629000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 626001
    }
    expect(calc(options)).toBe(45600)
})

test("629000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 626001
    }
    expect(calc(options)).toBe(39120)
})

test("629000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 626001
    }
    expect(calc(options)).toBe(32660)
})

test("629000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 626001
    }
    expect(calc(options)).toBe(26200)
})

test("629000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 626001
    }
    expect(calc(options)).toBe(19760)
})

test("629000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 626001
    }
    expect(calc(options)).toBe(16520)
})

test("629000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 626001
    }
    expect(calc(options)).toBe(13290)
})

test("629000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 626001
    }
    expect(calc(options)).toBe(209500)
})

test("632000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 629001
    }
    expect(calc(options)).toBe(52610)
})

test("632000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 629001
    }
    expect(calc(options)).toBe(46150)
})

test("632000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 629001
    }
    expect(calc(options)).toBe(39680)
})

test("632000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 629001
    }
    expect(calc(options)).toBe(33210)
})

test("632000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 629001
    }
    expect(calc(options)).toBe(26750)
})

test("632000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 629001
    }
    expect(calc(options)).toBe(20280)
})

test("632000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 629001
    }
    expect(calc(options)).toBe(16800)
})

test("632000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 629001
    }
    expect(calc(options)).toBe(13570)
})

test("632000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 629001
    }
    expect(calc(options)).toBe(211000)
})

test("635000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 632001
    }
    expect(calc(options)).toBe(53160)
})

test("635000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 632001
    }
    expect(calc(options)).toBe(46700)
})

test("635000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 632001
    }
    expect(calc(options)).toBe(40230)
})

test("635000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 632001
    }
    expect(calc(options)).toBe(33760)
})

test("635000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 632001
    }
    expect(calc(options)).toBe(27300)
})

test("635000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 632001
    }
    expect(calc(options)).toBe(20830)
})

test("635000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 632001
    }
    expect(calc(options)).toBe(17070)
})

test("635000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 632001
    }
    expect(calc(options)).toBe(13840)
})

test("635000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 632001
    }
    expect(calc(options)).toBe(212500)
})

test("638000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 635001
    }
    expect(calc(options)).toBe(53710)
})

test("638000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 635001
    }
    expect(calc(options)).toBe(47250)
})

test("638000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 635001
    }
    expect(calc(options)).toBe(40780)
})

test("638000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 635001
    }
    expect(calc(options)).toBe(34320)
})

test("638000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 635001
    }
    expect(calc(options)).toBe(27850)
})

test("638000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 635001
    }
    expect(calc(options)).toBe(21380)
})

test("638000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 635001
    }
    expect(calc(options)).toBe(17350)
})

test("638000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 635001
    }
    expect(calc(options)).toBe(14120)
})

test("638000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 635001
    }
    expect(calc(options)).toBe(214000)
})

test("641000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 638001
    }
    expect(calc(options)).toBe(54270)
})

test("641000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 638001
    }
    expect(calc(options)).toBe(47800)
})

test("641000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 638001
    }
    expect(calc(options)).toBe(41330)
})

test("641000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 638001
    }
    expect(calc(options)).toBe(34870)
})

test("641000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 638001
    }
    expect(calc(options)).toBe(28400)
})

test("641000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 638001
    }
    expect(calc(options)).toBe(21930)
})

test("641000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 638001
    }
    expect(calc(options)).toBe(17620)
})

test("641000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 638001
    }
    expect(calc(options)).toBe(14400)
})

test("641000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 638001
    }
    expect(calc(options)).toBe(214900)
})

test("644000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 641001
    }
    expect(calc(options)).toBe(54820)
})

test("644000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 641001
    }
    expect(calc(options)).toBe(48350)
})

test("644000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 641001
    }
    expect(calc(options)).toBe(41880)
})

test("644000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 641001
    }
    expect(calc(options)).toBe(35420)
})

test("644000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 641001
    }
    expect(calc(options)).toBe(28960)
})

test("644000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 641001
    }
    expect(calc(options)).toBe(22480)
})

test("644000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 641001
    }
    expect(calc(options)).toBe(17900)
})

test("644000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 641001
    }
    expect(calc(options)).toBe(14670)
})

test("644000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 641001
    }
    expect(calc(options)).toBe(215900)
})

test("647000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 644001
    }
    expect(calc(options)).toBe(55370)
})

test("647000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 644001
    }
    expect(calc(options)).toBe(48910)
})

test("647000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 644001
    }
    expect(calc(options)).toBe(42430)
})

test("647000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 644001
    }
    expect(calc(options)).toBe(35970)
})

test("647000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 644001
    }
    expect(calc(options)).toBe(29510)
})

test("647000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 644001
    }
    expect(calc(options)).toBe(23030)
})

test("647000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 644001
    }
    expect(calc(options)).toBe(18170)
})

test("647000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 644001
    }
    expect(calc(options)).toBe(14950)
})

test("647000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 644001
    }
    expect(calc(options)).toBe(217000)
})

test("650000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 647001
    }
    expect(calc(options)).toBe(55920)
})

test("650000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 647001
    }
    expect(calc(options)).toBe(49460)
})

test("650000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 647001
    }
    expect(calc(options)).toBe(42980)
})

test("650000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 647001
    }
    expect(calc(options)).toBe(36520)
})

test("650000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 647001
    }
    expect(calc(options)).toBe(30060)
})

test("650000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 647001
    }
    expect(calc(options)).toBe(23590)
})

test("650000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 647001
    }
    expect(calc(options)).toBe(18450)
})

test("650000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 647001
    }
    expect(calc(options)).toBe(15220)
})

test("650000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 647001
    }
    expect(calc(options)).toBe(218000)
})

test("653000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 650001
    }
    expect(calc(options)).toBe(56470)
})

test("653000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 650001
    }
    expect(calc(options)).toBe(50010)
})

test("653000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 650001
    }
    expect(calc(options)).toBe(43540)
})

test("653000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 650001
    }
    expect(calc(options)).toBe(37070)
})

test("653000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 650001
    }
    expect(calc(options)).toBe(30610)
})

test("653000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 650001
    }
    expect(calc(options)).toBe(24140)
})

test("653000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 650001
    }
    expect(calc(options)).toBe(18730)
})

test("653000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 650001
    }
    expect(calc(options)).toBe(15500)
})

test("653000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 650001
    }
    expect(calc(options)).toBe(219000)
})

test("656000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 653001
    }
    expect(calc(options)).toBe(57020)
})

test("656000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 653001
    }
    expect(calc(options)).toBe(50560)
})

test("656000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 653001
    }
    expect(calc(options)).toBe(44090)
})

test("656000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 653001
    }
    expect(calc(options)).toBe(37620)
})

test("656000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 653001
    }
    expect(calc(options)).toBe(31160)
})

test("656000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 653001
    }
    expect(calc(options)).toBe(24690)
})

test("656000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 653001
    }
    expect(calc(options)).toBe(19000)
})

test("656000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 653001
    }
    expect(calc(options)).toBe(15770)
})

test("656000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 653001
    }
    expect(calc(options)).toBe(220000)
})

test("659000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 656001
    }
    expect(calc(options)).toBe(57570)
})

test("659000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 656001
    }
    expect(calc(options)).toBe(51110)
})

test("659000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 656001
    }
    expect(calc(options)).toBe(44640)
})

test("659000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 656001
    }
    expect(calc(options)).toBe(38180)
})

test("659000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 656001
    }
    expect(calc(options)).toBe(31710)
})

test("659000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 656001
    }
    expect(calc(options)).toBe(25240)
})

test("659000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 656001
    }
    expect(calc(options)).toBe(19280)
})

test("659000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 656001
    }
    expect(calc(options)).toBe(16050)
})

test("659000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 656001
    }
    expect(calc(options)).toBe(221000)
})

test("662000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 659001
    }
    expect(calc(options)).toBe(58130)
})

test("662000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 659001
    }
    expect(calc(options)).toBe(51660)
})

test("662000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 659001
    }
    expect(calc(options)).toBe(45190)
})

test("662000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 659001
    }
    expect(calc(options)).toBe(38730)
})

test("662000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 659001
    }
    expect(calc(options)).toBe(32260)
})

test("662000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 659001
    }
    expect(calc(options)).toBe(25790)
})

test("662000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 659001
    }
    expect(calc(options)).toBe(19550)
})

test("662000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 659001
    }
    expect(calc(options)).toBe(16330)
})

test("662000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 659001
    }
    expect(calc(options)).toBe(222100)
})

test("665000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 662001
    }
    expect(calc(options)).toBe(58680)
})

test("665000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 662001
    }
    expect(calc(options)).toBe(52210)
})

test("665000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 662001
    }
    expect(calc(options)).toBe(45740)
})

test("665000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 662001
    }
    expect(calc(options)).toBe(39280)
})

test("665000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 662001
    }
    expect(calc(options)).toBe(32810)
})

test("665000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 662001
    }
    expect(calc(options)).toBe(26340)
})

test("665000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 662001
    }
    expect(calc(options)).toBe(19880)
})

test("665000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 662001
    }
    expect(calc(options)).toBe(16600)
})

test("665000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 662001
    }
    expect(calc(options)).toBe(223100)
})

test("668000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 665001
    }
    expect(calc(options)).toBe(59230)
})

test("668000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 665001
    }
    expect(calc(options)).toBe(52770)
})

test("668000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 665001
    }
    expect(calc(options)).toBe(46290)
})

test("668000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 665001
    }
    expect(calc(options)).toBe(39830)
})

test("668000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 665001
    }
    expect(calc(options)).toBe(33370)
})

test("668000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 665001
    }
    expect(calc(options)).toBe(26890)
})

test("668000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 665001
    }
    expect(calc(options)).toBe(20430)
})

test("668000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 665001
    }
    expect(calc(options)).toBe(16880)
})

test("668000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 665001
    }
    expect(calc(options)).toBe(224100)
})

test("671000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 668001
    }
    expect(calc(options)).toBe(59780)
})

test("671000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 668001
    }
    expect(calc(options)).toBe(53320)
})

test("671000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 668001
    }
    expect(calc(options)).toBe(46840)
})

test("671000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 668001
    }
    expect(calc(options)).toBe(40380)
})

test("671000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 668001
    }
    expect(calc(options)).toBe(33920)
})

test("671000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 668001
    }
    expect(calc(options)).toBe(27440)
})

test("671000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 668001
    }
    expect(calc(options)).toBe(20980)
})

test("671000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 668001
    }
    expect(calc(options)).toBe(17150)
})

test("671000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 668001
    }
    expect(calc(options)).toBe(225000)
})

test("674000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 671001
    }
    expect(calc(options)).toBe(60330)
})

test("674000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 671001
    }
    expect(calc(options)).toBe(53870)
})

test("674000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 671001
    }
    expect(calc(options)).toBe(47390)
})

test("674000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 671001
    }
    expect(calc(options)).toBe(40930)
})

test("674000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 671001
    }
    expect(calc(options)).toBe(34470)
})

test("674000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 671001
    }
    expect(calc(options)).toBe(28000)
})

test("674000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 671001
    }
    expect(calc(options)).toBe(21530)
})

test("674000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 671001
    }
    expect(calc(options)).toBe(17430)
})

test("674000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 671001
    }
    expect(calc(options)).toBe(226000)
})

test("677000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 674001
    }
    expect(calc(options)).toBe(60880)
})

test("677000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 674001
    }
    expect(calc(options)).toBe(54420)
})

test("677000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 674001
    }
    expect(calc(options)).toBe(47950)
})

test("677000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 674001
    }
    expect(calc(options)).toBe(41480)
})

test("677000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 674001
    }
    expect(calc(options)).toBe(35020)
})

test("677000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 674001
    }
    expect(calc(options)).toBe(28550)
})

test("677000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 674001
    }
    expect(calc(options)).toBe(22080)
})

test("677000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 674001
    }
    expect(calc(options)).toBe(17700)
})

test("677000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 674001
    }
    expect(calc(options)).toBe(227100)
})

test("680000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 677001
    }
    expect(calc(options)).toBe(61430)
})

test("680000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 677001
    }
    expect(calc(options)).toBe(54970)
})

test("680000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 677001
    }
    expect(calc(options)).toBe(48500)
})

test("680000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 677001
    }
    expect(calc(options)).toBe(42030)
})

test("680000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 677001
    }
    expect(calc(options)).toBe(35570)
})

test("680000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 677001
    }
    expect(calc(options)).toBe(29100)
})

test("680000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 677001
    }
    expect(calc(options)).toBe(22640)
})

test("680000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 677001
    }
    expect(calc(options)).toBe(17980)
})

test("680000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 677001
    }
    expect(calc(options)).toBe(228100)
})

test("683000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 680001
    }
    expect(calc(options)).toBe(61980)
})

test("683000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 680001
    }
    expect(calc(options)).toBe(55520)
})

test("683000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 680001
    }
    expect(calc(options)).toBe(49050)
})

test("683000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 680001
    }
    expect(calc(options)).toBe(42590)
})

test("683000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 680001
    }
    expect(calc(options)).toBe(36120)
})

test("683000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 680001
    }
    expect(calc(options)).toBe(29650)
})

test("683000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 680001
    }
    expect(calc(options)).toBe(23190)
})

test("683000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 680001
    }
    expect(calc(options)).toBe(18260)
})

test("683000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 680001
    }
    expect(calc(options)).toBe(229100)
})

test("686000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 683001
    }
    expect(calc(options)).toBe(62540)
})

test("686000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 683001
    }
    expect(calc(options)).toBe(56070)
})

test("686000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 683001
    }
    expect(calc(options)).toBe(49600)
})

test("686000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 683001
    }
    expect(calc(options)).toBe(43140)
})

test("686000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 683001
    }
    expect(calc(options)).toBe(36670)
})

test("686000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 683001
    }
    expect(calc(options)).toBe(30200)
})

test("686000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 683001
    }
    expect(calc(options)).toBe(23740)
})

test("686000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 683001
    }
    expect(calc(options)).toBe(18530)
})

test("686000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 683001
    }
    expect(calc(options)).toBe(230400)
})

test("689000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 686001
    }
    expect(calc(options)).toBe(63090)
})

test("689000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 686001
    }
    expect(calc(options)).toBe(56620)
})

test("689000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 686001
    }
    expect(calc(options)).toBe(50150)
})

test("689000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 686001
    }
    expect(calc(options)).toBe(43690)
})

test("689000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 686001
    }
    expect(calc(options)).toBe(37230)
})

test("689000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 686001
    }
    expect(calc(options)).toBe(30750)
})

test("689000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 686001
    }
    expect(calc(options)).toBe(24290)
})

test("689000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 686001
    }
    expect(calc(options)).toBe(18810)
})

test("689000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 686001
    }
    expect(calc(options)).toBe(232100)
})

test("692000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 689001
    }
    expect(calc(options)).toBe(63640)
})

test("692000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 689001
    }
    expect(calc(options)).toBe(57180)
})

test("692000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 689001
    }
    expect(calc(options)).toBe(50700)
})

test("692000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 689001
    }
    expect(calc(options)).toBe(44240)
})

test("692000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 689001
    }
    expect(calc(options)).toBe(37780)
})

test("692000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 689001
    }
    expect(calc(options)).toBe(31300)
})

test("692000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 689001
    }
    expect(calc(options)).toBe(24840)
})

test("692000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 689001
    }
    expect(calc(options)).toBe(19080)
})

test("692000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 689001
    }
    expect(calc(options)).toBe(233600)
})

test("695000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 692001
    }
    expect(calc(options)).toBe(64190)
})

test("695000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 692001
    }
    expect(calc(options)).toBe(57730)
})

test("695000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 692001
    }
    expect(calc(options)).toBe(51250)
})

test("695000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 692001
    }
    expect(calc(options)).toBe(44790)
})

test("695000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 692001
    }
    expect(calc(options)).toBe(38330)
})

test("695000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 692001
    }
    expect(calc(options)).toBe(31860)
})

test("695000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 692001
    }
    expect(calc(options)).toBe(25390)
})

test("695000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 692001
    }
    expect(calc(options)).toBe(19360)
})

test("695000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 692001
    }
    expect(calc(options)).toBe(235100)
})

test("698000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 695001
    }
    expect(calc(options)).toBe(64740)
})

test("698000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 695001
    }
    expect(calc(options)).toBe(58280)
})

test("698000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 695001
    }
    expect(calc(options)).toBe(51810)
})

test("698000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 695001
    }
    expect(calc(options)).toBe(45340)
})

test("698000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 695001
    }
    expect(calc(options)).toBe(38880)
})

test("698000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 695001
    }
    expect(calc(options)).toBe(32410)
})

test("698000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 695001
    }
    expect(calc(options)).toBe(25940)
})

test("698000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 695001
    }
    expect(calc(options)).toBe(19630)
})

test("698000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 695001
    }
    expect(calc(options)).toBe(236700)
})

test("701000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 698001
    }
    expect(calc(options)).toBe(65290)
})

test("701000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 698001
    }
    expect(calc(options)).toBe(58830)
})

test("701000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 698001
    }
    expect(calc(options)).toBe(52360)
})

test("701000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 698001
    }
    expect(calc(options)).toBe(45890)
})

test("701000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 698001
    }
    expect(calc(options)).toBe(39430)
})

test("701000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 698001
    }
    expect(calc(options)).toBe(32960)
})

test("701000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 698001
    }
    expect(calc(options)).toBe(26490)
})

test("701000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 698001
    }
    expect(calc(options)).toBe(20030)
})

test("701000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 698001
    }
    expect(calc(options)).toBe(238200)
})

test("704000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 701001
    }
    expect(calc(options)).toBe(65840)
})

test("704000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 701001
    }
    expect(calc(options)).toBe(59380)
})

test("704000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 701001
    }
    expect(calc(options)).toBe(52910)
})

test("704000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 701001
    }
    expect(calc(options)).toBe(46450)
})

test("704000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 701001
    }
    expect(calc(options)).toBe(39980)
})

test("704000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 701001
    }
    expect(calc(options)).toBe(33510)
})

test("704000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 701001
    }
    expect(calc(options)).toBe(27050)
})

test("704000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 701001
    }
    expect(calc(options)).toBe(20580)
})

test("704000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 701001
    }
    expect(calc(options)).toBe(239700)
})

test("707000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 704001
    }
    expect(calc(options)).toBe(66400)
})

test("707000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 704001
    }
    expect(calc(options)).toBe(59930)
})

test("707000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 704001
    }
    expect(calc(options)).toBe(53460)
})

test("707000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 704001
    }
    expect(calc(options)).toBe(47000)
})

test("707000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 704001
    }
    expect(calc(options)).toBe(40530)
})

test("707000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 704001
    }
    expect(calc(options)).toBe(34060)
})

test("707000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 704001
    }
    expect(calc(options)).toBe(27600)
})

test("707000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 704001
    }
    expect(calc(options)).toBe(21130)
})

test("707000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 704001
    }
    expect(calc(options)).toBe(241300)
})

test("710000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 707001
    }
    expect(calc(options)).toBe(66960)
})

test("710000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 707001
    }
    expect(calc(options)).toBe(60480)
})

test("710000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 707001
    }
    expect(calc(options)).toBe(54020)
})

test("710000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 707001
    }
    expect(calc(options)).toBe(47550)
})

test("710000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 707001
    }
    expect(calc(options)).toBe(41090)
})

test("710000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 707001
    }
    expect(calc(options)).toBe(34620)
})

test("710000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 707001
    }
    expect(calc(options)).toBe(28150)
})

test("710000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 707001
    }
    expect(calc(options)).toBe(21690)
})

test("710000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 707001
    }
    expect(calc(options)).toBe(242900)
})

test("713000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 710001
    }
    expect(calc(options)).toBe(67570)
})

test("713000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 710001
    }
    expect(calc(options)).toBe(61100)
})

test("713000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 710001
    }
    expect(calc(options)).toBe(54630)
})

test("713000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 710001
    }
    expect(calc(options)).toBe(48160)
})

test("713000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 710001
    }
    expect(calc(options)).toBe(41700)
})

test("713000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 710001
    }
    expect(calc(options)).toBe(35230)
})

test("713000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 710001
    }
    expect(calc(options)).toBe(28760)
})

test("713000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 710001
    }
    expect(calc(options)).toBe(22300)
})

test("713000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 710001
    }
    expect(calc(options)).toBe(244400)
})

test("716000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 713001
    }
    expect(calc(options)).toBe(68180)
})

test("716000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 713001
    }
    expect(calc(options)).toBe(61710)
})

test("716000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 713001
    }
    expect(calc(options)).toBe(55250)
})

test("716000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 713001
    }
    expect(calc(options)).toBe(48770)
})

test("716000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 713001
    }
    expect(calc(options)).toBe(42310)
})

test("716000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 713001
    }
    expect(calc(options)).toBe(35850)
})

test("716000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 713001
    }
    expect(calc(options)).toBe(29370)
})

test("716000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 713001
    }
    expect(calc(options)).toBe(22910)
})

test("716000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 713001
    }
    expect(calc(options)).toBe(246000)
})

test("719000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 716001
    }
    expect(calc(options)).toBe(68790)
})

test("719000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 716001
    }
    expect(calc(options)).toBe(62320)
})

test("719000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 716001
    }
    expect(calc(options)).toBe(55860)
})

test("719000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 716001
    }
    expect(calc(options)).toBe(49390)
})

test("719000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 716001
    }
    expect(calc(options)).toBe(42920)
})

test("719000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 716001
    }
    expect(calc(options)).toBe(36460)
})

test("719000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 716001
    }
    expect(calc(options)).toBe(29990)
})

test("719000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 716001
    }
    expect(calc(options)).toBe(23520)
})

test("719000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 716001
    }
    expect(calc(options)).toBe(247500)
})

test("722000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 719001
    }
    expect(calc(options)).toBe(69410)
})

test("722000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 719001
    }
    expect(calc(options)).toBe(62930)
})

test("722000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 719001
    }
    expect(calc(options)).toBe(56470)
})

test("722000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 719001
    }
    expect(calc(options)).toBe(50000)
})

test("722000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 719001
    }
    expect(calc(options)).toBe(43540)
})

test("722000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 719001
    }
    expect(calc(options)).toBe(37070)
})

test("722000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 719001
    }
    expect(calc(options)).toBe(30600)
})

test("722000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 719001
    }
    expect(calc(options)).toBe(24140)
})

test("722000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 719001
    }
    expect(calc(options)).toBe(249000)
})

test("725000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 722001
    }
    expect(calc(options)).toBe(70020)
})

test("725000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 722001
    }
    expect(calc(options)).toBe(63550)
})

test("725000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 722001
    }
    expect(calc(options)).toBe(57080)
})

test("725000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 722001
    }
    expect(calc(options)).toBe(50610)
})

test("725000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 722001
    }
    expect(calc(options)).toBe(44150)
})

test("725000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 722001
    }
    expect(calc(options)).toBe(37690)
})

test("725000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 722001
    }
    expect(calc(options)).toBe(31210)
})

test("725000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 722001
    }
    expect(calc(options)).toBe(24750)
})

test("725000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 722001
    }
    expect(calc(options)).toBe(250600)
})

test("728000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 725001
    }
    expect(calc(options)).toBe(70630)
})

test("728000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 725001
    }
    expect(calc(options)).toBe(64160)
})

test("728000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 725001
    }
    expect(calc(options)).toBe(57700)
})

test("728000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 725001
    }
    expect(calc(options)).toBe(51220)
})

test("728000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 725001
    }
    expect(calc(options)).toBe(44760)
})

test("728000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 725001
    }
    expect(calc(options)).toBe(38300)
})

test("728000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 725001
    }
    expect(calc(options)).toBe(31820)
})

test("728000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 725001
    }
    expect(calc(options)).toBe(25360)
})

test("728000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 725001
    }
    expect(calc(options)).toBe(252200)
})

test("731000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 728001
    }
    expect(calc(options)).toBe(71250)
})

test("731000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 728001
    }
    expect(calc(options)).toBe(64770)
})

test("731000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 728001
    }
    expect(calc(options)).toBe(58310)
})

test("731000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 728001
    }
    expect(calc(options)).toBe(51840)
})

test("731000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 728001
    }
    expect(calc(options)).toBe(45370)
})

test("731000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 728001
    }
    expect(calc(options)).toBe(38910)
})

test("731000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 728001
    }
    expect(calc(options)).toBe(32440)
})

test("731000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 728001
    }
    expect(calc(options)).toBe(25970)
})

test("731000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 728001
    }
    expect(calc(options)).toBe(253700)
})

test("734000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 731001
    }
    expect(calc(options)).toBe(71860)
})

test("734000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 731001
    }
    expect(calc(options)).toBe(65380)
})

test("734000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 731001
    }
    expect(calc(options)).toBe(58920)
})

test("734000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 731001
    }
    expect(calc(options)).toBe(52450)
})

test("734000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 731001
    }
    expect(calc(options)).toBe(45990)
})

test("734000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 731001
    }
    expect(calc(options)).toBe(39520)
})

test("734000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 731001
    }
    expect(calc(options)).toBe(33050)
})

test("734000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 731001
    }
    expect(calc(options)).toBe(26590)
})

test("734000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 731001
    }
    expect(calc(options)).toBe(255300)
})

test("737000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 734001
    }
    expect(calc(options)).toBe(72470)
})

test("737000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 734001
    }
    expect(calc(options)).toBe(66000)
})

test("737000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 734001
    }
    expect(calc(options)).toBe(59530)
})

test("737000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 734001
    }
    expect(calc(options)).toBe(53060)
})

test("737000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 734001
    }
    expect(calc(options)).toBe(46600)
})

test("737000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 734001
    }
    expect(calc(options)).toBe(40140)
})

test("737000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 734001
    }
    expect(calc(options)).toBe(33660)
})

test("737000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 734001
    }
    expect(calc(options)).toBe(27200)
})

test("737000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 734001
    }
    expect(calc(options)).toBe(256800)
})

test("740000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 737001
    }
    expect(calc(options)).toBe(73080)
})

test("740000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 737001
    }
    expect(calc(options)).toBe(66610)
})

test("740000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 737001
    }
    expect(calc(options)).toBe(60150)
})

test("740000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 737001
    }
    expect(calc(options)).toBe(53670)
})

test("740000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 737001
    }
    expect(calc(options)).toBe(47210)
})

test("740000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 737001
    }
    expect(calc(options)).toBe(40750)
})

test("740000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 737001
    }
    expect(calc(options)).toBe(34270)
})

test("740000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 737001
    }
    expect(calc(options)).toBe(27810)
})

test("740000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 737001
    }
    expect(calc(options)).toBe(258300)
})

test("780000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 740001
    }
    expect(calc(options)).toBe(73390+Math.floor((740001 - 740000)*20.42*1/100))
})

test("780000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 740001
    }
    expect(calc(options)).toBe(66920+Math.floor((740001 - 740000)*20.42*1/100))
})

test("780000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 740001
    }
    expect(calc(options)).toBe(60450+Math.floor((740001 - 740000)*20.42*1/100))
})

test("780000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 740001
    }
    expect(calc(options)).toBe(53980+Math.floor((740001 - 740000)*20.42*1/100))
})

test("780000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 740001
    }
    expect(calc(options)).toBe(47520+Math.floor((740001 - 740000)*20.42*1/100))
})

test("780000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 740001
    }
    expect(calc(options)).toBe(41050+Math.floor((740001 - 740000)*20.42*1/100))
})

test("780000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 740001
    }
    expect(calc(options)).toBe(34580+Math.floor((740001 - 740000)*20.42*1/100))
})

test("780000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 740001
    }
    expect(calc(options)).toBe(28120+Math.floor((740001 - 740000)*20.42*1/100))
})

test("780000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 740001
    }
    expect(calc(options)).toBe(259800+Math.floor((740001 - 740000)*40.84*1/100))
})

test("950000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 780001
    }
    expect(calc(options)).toBe(81560+Math.floor((780001 - 780000)*23.483*1/100))
})

test("950000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 780001
    }
    expect(calc(options)).toBe(75090+Math.floor((780001 - 780000)*23.483*1/100))
})

test("950000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 780001
    }
    expect(calc(options)).toBe(68620+Math.floor((780001 - 780000)*23.483*1/100))
})

test("950000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 780001
    }
    expect(calc(options)).toBe(62150+Math.floor((780001 - 780000)*23.483*1/100))
})

test("950000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 780001
    }
    expect(calc(options)).toBe(55690+Math.floor((780001 - 780000)*23.483*1/100))
})

test("950000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 780001
    }
    expect(calc(options)).toBe(49220+Math.floor((780001 - 780000)*23.483*1/100))
})

test("950000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 780001
    }
    expect(calc(options)).toBe(42750+Math.floor((780001 - 780000)*23.483*1/100))
})

test("950000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 780001
    }
    expect(calc(options)).toBe(36290+Math.floor((780001 - 780000)*23.483*1/100))
})

test("950000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 780001
    }
    expect(calc(options)).toBe(259800+Math.floor((780001 - 740000)*40.84*1/100))
})

test("1700000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 950001
    }
    expect(calc(options)).toBe(121480+Math.floor((950001 - 950000)*33.693*1/100))
})

test("1700000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 950001
    }
    expect(calc(options)).toBe(115010+Math.floor((950001 - 950000)*33.693*1/100))
})

test("1700000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 950001
    }
    expect(calc(options)).toBe(108540+Math.floor((950001 - 950000)*33.693*1/100))
})

test("1700000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 950001
    }
    expect(calc(options)).toBe(102070+Math.floor((950001 - 950000)*33.693*1/100))
})

test("1700000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 950001
    }
    expect(calc(options)).toBe(95610+Math.floor((950001 - 950000)*33.693*1/100))
})

test("1700000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 950001
    }
    expect(calc(options)).toBe(89140+Math.floor((950001 - 950000)*33.693*1/100))
})

test("1700000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 950001
    }
    expect(calc(options)).toBe(82670+Math.floor((950001 - 950000)*33.693*1/100))
})

test("1700000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 950001
    }
    expect(calc(options)).toBe(76210+Math.floor((950001 - 950000)*33.693*1/100))
})

test("1700000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 950001
    }
    expect(calc(options)).toBe(259800+Math.floor((950001 - 740000)*40.84*1/100))
})

test("2170000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 1700001
    }
    expect(calc(options)).toBe(374180+Math.floor((1700001 - 1700000)*40.84*1/100))
})

test("2170000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 1700001
    }
    expect(calc(options)).toBe(367710+Math.floor((1700001 - 1700000)*40.84*1/100))
})

test("2170000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 1700001
    }
    expect(calc(options)).toBe(361240+Math.floor((1700001 - 1700000)*40.84*1/100))
})

test("2170000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 1700001
    }
    expect(calc(options)).toBe(354770+Math.floor((1700001 - 1700000)*40.84*1/100))
})

test("2170000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 1700001
    }
    expect(calc(options)).toBe(348310+Math.floor((1700001 - 1700000)*40.84*1/100))
})

test("2170000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 1700001
    }
    expect(calc(options)).toBe(341840+Math.floor((1700001 - 1700000)*40.84*1/100))
})

test("2170000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 1700001
    }
    expect(calc(options)).toBe(335370+Math.floor((1700001 - 1700000)*40.84*1/100))
})

test("2170000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 1700001
    }
    expect(calc(options)).toBe(328910+Math.floor((1700001 - 1700000)*40.84*1/100))
})

test("2170000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 1700001
    }
    expect(calc(options)).toBe(651900+Math.floor((1700001 - 1700000)*45.945*1/100))
})

test("2210000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 2170001
    }
    expect(calc(options)).toBe(571570+Math.floor((2170001 - 2170000)*40.84*1/100))
})

test("2210000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 2170001
    }
    expect(calc(options)).toBe(565090+Math.floor((2170001 - 2170000)*40.84*1/100))
})

test("2210000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 2170001
    }
    expect(calc(options)).toBe(558630+Math.floor((2170001 - 2170000)*40.84*1/100))
})

test("2210000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 2170001
    }
    expect(calc(options)).toBe(552160+Math.floor((2170001 - 2170000)*40.84*1/100))
})

test("2210000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 2170001
    }
    expect(calc(options)).toBe(545690+Math.floor((2170001 - 2170000)*40.84*1/100))
})

test("2210000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 2170001
    }
    expect(calc(options)).toBe(539230+Math.floor((2170001 - 2170000)*40.84*1/100))
})

test("2210000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 2170001
    }
    expect(calc(options)).toBe(532760+Math.floor((2170001 - 2170000)*40.84*1/100))
})

test("2210000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 2170001
    }
    expect(calc(options)).toBe(526290+Math.floor((2170001 - 2170000)*40.84*1/100))
})

test("2210000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 2170001
    }
    expect(calc(options)).toBe(651900+Math.floor((2170001 - 1700000)*45.945*1/100))
})

test("2250000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 2210001
    }
    expect(calc(options)).toBe(593340+Math.floor((2210001 - 2210000)*40.84*1/100))
})

test("2250000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 2210001
    }
    expect(calc(options)).toBe(586870+Math.floor((2210001 - 2210000)*40.84*1/100))
})

test("2250000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 2210001
    }
    expect(calc(options)).toBe(580410+Math.floor((2210001 - 2210000)*40.84*1/100))
})

test("2250000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 2210001
    }
    expect(calc(options)).toBe(573930+Math.floor((2210001 - 2210000)*40.84*1/100))
})

test("2250000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 2210001
    }
    expect(calc(options)).toBe(567470+Math.floor((2210001 - 2210000)*40.84*1/100))
})

test("2250000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 2210001
    }
    expect(calc(options)).toBe(561010+Math.floor((2210001 - 2210000)*40.84*1/100))
})

test("2250000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 2210001
    }
    expect(calc(options)).toBe(554540+Math.floor((2210001 - 2210000)*40.84*1/100))
})

test("2250000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 2210001
    }
    expect(calc(options)).toBe(548070+Math.floor((2210001 - 2210000)*40.84*1/100))
})

test("2250000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 2210001
    }
    expect(calc(options)).toBe(651900+Math.floor((2210001 - 1700000)*45.945*1/100))
})

test("3500000 kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 2250001
    }
    expect(calc(options)).toBe(615120+Math.floor((2250001 - 2250000)*40.84*1/100))
})

test("3500000 kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 2250001
    }
    expect(calc(options)).toBe(608650+Math.floor((2250001 - 2250000)*40.84*1/100))
})

test("3500000 kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 2250001
    }
    expect(calc(options)).toBe(602190+Math.floor((2250001 - 2250000)*40.84*1/100))
})

test("3500000 kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 2250001
    }
    expect(calc(options)).toBe(595710+Math.floor((2250001 - 2250000)*40.84*1/100))
})

test("3500000 kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 2250001
    }
    expect(calc(options)).toBe(589250+Math.floor((2250001 - 2250000)*40.84*1/100))
})

test("3500000 kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 2250001
    }
    expect(calc(options)).toBe(582790+Math.floor((2250001 - 2250000)*40.84*1/100))
})

test("3500000 kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 2250001
    }
    expect(calc(options)).toBe(576310+Math.floor((2250001 - 2250000)*40.84*1/100))
})

test("3500000 kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 2250001
    }
    expect(calc(options)).toBe(569850+Math.floor((2250001 - 2250000)*40.84*1/100))
})

test("3500000 otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 2250001
    }
    expect(calc(options)).toBe(651900+Math.floor((2250001 - 1700000)*45.945*1/100))
})

test("None kou 0-0", () => {
    const options = {
        kou: true,
        fuyou: 0,
        amount: 3500001
    }
    expect(calc(options)).toBe(1125620+Math.floor((3500001 - 3500000)*45.945*1/100))
})

test("None kou 1-1", () => {
    const options = {
        kou: true,
        fuyou: 1,
        amount: 3500001
    }
    expect(calc(options)).toBe(1119150+Math.floor((3500001 - 3500000)*45.945*1/100))
})

test("None kou 2-2", () => {
    const options = {
        kou: true,
        fuyou: 2,
        amount: 3500001
    }
    expect(calc(options)).toBe(1112690+Math.floor((3500001 - 3500000)*45.945*1/100))
})

test("None kou 3-3", () => {
    const options = {
        kou: true,
        fuyou: 3,
        amount: 3500001
    }
    expect(calc(options)).toBe(1106210+Math.floor((3500001 - 3500000)*45.945*1/100))
})

test("None kou 4-4", () => {
    const options = {
        kou: true,
        fuyou: 4,
        amount: 3500001
    }
    expect(calc(options)).toBe(1099750+Math.floor((3500001 - 3500000)*45.945*1/100))
})

test("None kou 5-5", () => {
    const options = {
        kou: true,
        fuyou: 5,
        amount: 3500001
    }
    expect(calc(options)).toBe(1093290+Math.floor((3500001 - 3500000)*45.945*1/100))
})

test("None kou 6-6", () => {
    const options = {
        kou: true,
        fuyou: 6,
        amount: 3500001
    }
    expect(calc(options)).toBe(1086810+Math.floor((3500001 - 3500000)*45.945*1/100))
})

test("None kou 7-7", () => {
    const options = {
        kou: true,
        fuyou: 7,
        amount: 3500001
    }
    expect(calc(options)).toBe(1080350+Math.floor((3500001 - 3500000)*45.945*1/100))
})

test("None otsu 0-8", () => {
    const options = {
        kou: false,
        fuyou: 0,
        amount: 3500001
    }
    expect(calc(options)).toBe(651900+Math.floor((3500001 - 1700000)*45.945*1/100))
})
