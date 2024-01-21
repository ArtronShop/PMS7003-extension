({
    name: "PMS3003", // Category Name
    description: "Digital universal particle concentration sensor",
    author: "ArmCool",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#E67E22", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="pms3003_read">
                    <field name="pin">32</field>
                    <field name="type">1</field>
                </block>
            `
        }
    ]
});
