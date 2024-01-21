Blockly.defineBlocksWithJsonArray([
{
  "type": "pms3003_read",
  "message0": "PMS3003 tx pin %1 read %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "IN1",
          "32"
        ],
        [
          "IN2",
          "33"
        ],
        [
          "IN3",
          "34"
        ],
        [
          "IN4",
          "35"
        ],
        [
          "OUT1",
          "26"
        ],
        [
          "OUT2",
          "27"
        ],
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "PM1.0",
          "0"
        ],
        [
          "PM2.5",
          "1"
        ],
        [
          "PM10.0",
          "2"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#E67E22",
  "tooltip": "Read particle concentration from PMS7003",
  "helpUrl": "https://www.ioxhop.com/p/869"
}
]);
