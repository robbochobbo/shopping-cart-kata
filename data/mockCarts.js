const mockCarts = {
    oneItem1: [
        {
            "code": "A",
            "quantity": 1
        }
    ],
    oneItem2: [
        {
            "code": "B",
            "quantity": 1
        }
    ],
    singleDifferentItems1: [
        {
            "code": "A",
            "quantity": 1
        },
        {
            "code": "B",
            "quantity": 1
        },
        {
            "code": "C",
            "quantity": 1
        },
        {
            "code": "D",
            "quantity": 1
        }
    ],
    singleDifferentItems2: [
        {
            "code": "A",
            "quantity": 1
        },
        {
            "code": "B",
            "quantity": 1
        },
        {
            "code": "C",
            "quantity": 1
        }
    ],
    multipleSameItem1: [
        {
            "code": "C",
            "quantity": 4
        }
    ],
    multipleSameItem2: [
        {
            "code": "D",
            "quantity": 8
        }
    ], 
    multipleDifferentItems1: [
        {
            "code": "C",
            "quantity": 4
        },
        {
            "code": "D",
            "quantity": 4
        }
    ],
    multipleDifferentItems2: [
        {
            "code": "A",
            "quantity": 2
        },
        {
            "code": "C",
            "quantity": 2
        },
        {
            "code": "D",
            "quantity": 4
        }
    ],
    multipleSameItemQualifiyingForSpecial1: [
        {
            "code": "A",
            "quantity": 4
        }
    ],
    multipleSameItemQualifiyingForSpecial2: [
        {
            "code": "A",
            "quantity": 11
        }
    ],
    multipleDifferentItemQualifiyingForSpecial1: [
        {
            "code": "A",
            "quantity": 3
        },
        {
            "code": "B",
            "quantity": 3
        },
        {
            "code": "C",
            "quantity": 1
        },
        {
            "code": "D",
            "quantity": 2
        }
    ],
    multipleDifferentItemQualifiyingForSpecial2: [
        {
            "code": "A",
            "quantity": 1
        },
        {
            "code": "B",
            "quantity": 8
        },
        {
            "code": "C",
            "quantity": 3
        },
        {
            "code": "D",
            "quantity": 2
        }
    ],
    multipleDifferentItemQualifiyingForSpecial3: [
        {
            "code": "B",
            "quantity": 9
        },
        {
            "code": "D",
            "quantity": 4
        }
    ],
    itemCodesNotInDataset1: [
        {
            "code": "D",
            "quantity": 4
        },
        {
            "code": "E",
            "quantity": 1
        }
    ],
    itemCodesNotInDataset2: [
        {
            "code": "D",
            "quantity": 4
        },
        {
            "code": "E",
            "quantity": 1
        },
        {
            "code": "F",
            "quantity": 1
        },
        {
            "code": "G",
            "quantity": 1
        }
    ]
}

module.exports = mockCarts
