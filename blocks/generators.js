Blockly.Python['pms3003_read'] = function(block) {
  Blockly.Python.definitions_['import_pms3003'] = 'import pms7003';

  var dropdown_clk = block.getFieldValue('pin');
  var dropdown_type = block.getFieldValue('type');

  var code = `pms3003.read(${dropdown_clk})[${dropdown_type}]`;
  return [code, Blockly.Python.ORDER_NONE];
};
