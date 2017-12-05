export default function (kibana) {

  return new kibana.Plugin({
    uiExports: {
      visTypes: [
        'plugins/kibana_sample_visualization/test_vis'
      ]
    }
  });
}
