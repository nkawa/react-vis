import ComplexChartExample from '../../../examples/complex-chart/complex-chart-example';
import Candlestick from '../../../examples/candlestick/candlestick-example';
import StreamgraphExample from '../../../examples/streamgraph/streamgraph-example';
import ForceDirectedGraph from '../../../examples/force-directed-graph/force-directed-example';
import ResponsiveVis from '../../../examples/responsive-vis/responsive-vis-example';
import ZoomableChartExample from '../../../examples/zoomable-chart/zoomable-chart-example';
import ShowcaseApp from '../../../showcase/showcase-app';

import AxesShowcase from '../../../showcase/showcase-sections/axes-showcase';
import PlotsShowcase from '../../../showcase/showcase-sections/plots-showcase';
import SunburstSection from '../../../showcase/showcase-sections/sunburst-showcase';
import RadialShowcase from '../../../showcase/showcase-sections/radial-showcase';
import LegendsShowcase from '../../../showcase/showcase-sections/legends-showcase';
import SankeysShowcase from '../../../showcase/showcase-sections/sankeys-showcase';
import RadarShowcase from '../../../showcase/showcase-sections/radar-showcase';
import TreemapShowcase from '../../../showcase/showcase-sections/treemap-showcase';
import MiscShowcase from '../../../showcase/showcase-sections/misc-showcase';

const generatePath = tree => {
  if (Array.isArray(tree)) {
    tree.forEach(branch => generatePath(branch));
  }
  if (tree.children) {
    generatePath(tree.children);
  }
  if (tree.name) {
    tree.path = updatePathName(tree.name);
  }
  return tree;
};

function updatePathName(name) {
  return name.toLowerCase().replace(/\s/g, '-');
}

const getDocUrl = filename => `markdown/${filename}`;

export const examplePages = generatePath([
  {
    name: 'Showcases',
    children: [{
      name: 'Plots',
      content: {
        pageType: 'example',
        markdown: getDocUrl('examples/showcase.md'),
        component: PlotsShowcase
      }
    }, {
      name: 'Axes',
      content: {
        markdown: getDocUrl('examples/showcase.md'),
        pageType: 'example',
        component: AxesShowcase
      }
    }, {
      name: 'Legends',
      content: {
        pageType: 'example',
        markdown: getDocUrl('examples/showcase.md'),
        component: LegendsShowcase
      }
    }, {
      name: 'Sunbursts',
      content: {
        pageType: 'example',
        markdown: getDocUrl('examples/showcase.md'),
        component: SunburstSection
      }
    }, {
      name: 'Radial',
      content: {
        pageType: 'example',
        markdown: getDocUrl('examples/showcase.md'),
        component: RadialShowcase
      }
    }, {
      name: 'Sankeys',
      content: {
        markdown: getDocUrl('examples/showcase.md'),
        pageType: 'example',
        component: SankeysShowcase
      }
    }, {
      name: 'Treemaps',
      content: {
        markdown: getDocUrl('examples/showcase.md'),
        pageType: 'example',
        component: TreemapShowcase
      }
    }, {
      name: 'Radar Charts',
      content: {
        markdown: getDocUrl('examples/showcase.md'),
        pageType: 'example',
        component: RadarShowcase
      }
    }, {
      name: 'Misc',
      content: {
        markdown: getDocUrl('examples/showcase.md'),
        pageType: 'example',
        component: MiscShowcase
      }
    }]
  },
  {
    name: 'Charts',
    children: [{
      name: 'Showcase',
      content: {
        markdown: getDocUrl('examples/showcase.md'),
        pageType: 'example',
        component: ShowcaseApp
      }
    }, {
      name: 'Candlestick',
      content: {
        markdown: getDocUrl('examples/extensibility.md'),
        pageType: 'example',
        component: Candlestick
      }
    }, {
      name: 'Force Directed Graph',
      content: {
        pageType: 'example',
        markdown: getDocUrl('examples/building-things-other-than-charts.md'),
        component: ForceDirectedGraph
      }
    }, {
      name: 'Complex Chart',
      content: {
        pageType: 'example',
        markdown: getDocUrl('examples/complex-chart.md'),
        component: ComplexChartExample
      }
    }, {
      name: 'Streamgraph',
      content: {
        pageType: 'example',
        markdown: getDocUrl('examples/stream-graph.md'),
        component: StreamgraphExample
      }
    }, {
      name: 'Responsive Vis',
      content: {
        markdown: getDocUrl('examples/responsive-vis.md'),
        pageType: 'example',
        component: ResponsiveVis
      }
    }, {
      name: 'Zoomable Chart',
      content: {
        markdown: getDocUrl('examples/zoomable-chart.md'),
        pageType: 'example',
        component: ZoomableChartExample
      }
    }]
  }

]);

export const docPages = generatePath([
  {
    name: 'Overview',
    pageType: 'documentation',
    children: [{
      name: 'Introduction',
      content: {
        markdown: getDocUrl('introduction.md'),
        filename: 'introduction.md',
        pageType: 'documentation'
      }
    }
    // , {
    //  name: 'The Uber Visualization Suite',
    //  content: {
    //    markdown: getDocUrl('suite.md'),
    //    filename: 'suite.md',
    //    pageType: 'documentation'
    // }
    ]
  },
  {
    name: 'Getting started',
    pageType: 'documentation',
    children: [{
      name: 'React-vis in codepen',
      content: {
        markdown: getDocUrl('getting-started/react-vis-in-codepen.md'),
        filename: 'getting-started/react-vis-in-codepen.md',
        pageType: 'documentation'
      }
    }, {
      name: 'Installing react-vis',
      content: {
        markdown: getDocUrl('getting-started/installing-react-vis.md'),
        filename: 'getting-started/installing-react-vis.md',
        pageType: 'documentation'
      }
    }, {
      name: 'Creating a new react-vis project',
      content: {
        markdown: getDocUrl('getting-started/new-react-vis-project.md'),
        filename: 'getting-started/new-react-vis-project.md',
        pageType: 'documentation'
      }
    }, {
      name: 'Your first chart',
      content: {
        markdown: getDocUrl('getting-started/your-first-chart.md'),
        filename: 'getting-started/your-first-chart.md',
        pageType: 'documentation'
      }
    }]
  }, {
    name: 'General principles',
    pageType: 'documentation',
    children: [{
      name: 'Scales and data',
      content: {
        markdown: getDocUrl('scales-and-data.md'),
        filename: 'scales-and-data.md',
        pageType: 'documentation'
      }
    }, {
      name: 'Colors',
      content: {
        markdown: getDocUrl('colors.md'),
        filename: 'colors.md',
        pageType: 'documentation'
      }
    }, {
      name: 'Interaction',
      content: {
        markdown: getDocUrl('interaction.md'),
        filename: 'interaction.md',
        pageType: 'documentation'
      }
    }, {
      name: 'Legends',
      content: {
        markdown: getDocUrl('legends.md'),
        filename: 'legends.md',
        pageType: 'documentation'
      }
    }, {
      name: 'Animation',
      content: {
        markdown: getDocUrl('animation.md'),
        filename: 'animation.md',
        pageType: 'documentation'
      }
    }, {
      name: 'Style',
      content: {
        markdown: getDocUrl('style.md'),
        filename: 'animation.md',
        pageType: 'documentation'
      }
    }]
  },
  {
    name: 'API Reference',
    children: [
      {
        name: 'XY-Plot',
        content: {
          markdown: getDocUrl('xy-plot.md'),
          filename: 'xy-plot.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Series',
        content: {
          markdown: getDocUrl('series.md'),
          filename: 'series.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Crosshair',
        content: {
          markdown: getDocUrl('crosshair.md'),
          filename: 'crosshair.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Grids',
        content: {
          markdown: getDocUrl('grids.md'),
          filename: 'grids.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Hint',
        content: {
          markdown: getDocUrl('hint.md'),
          filename: 'hint.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Axes',
        content: {
          markdown: getDocUrl('axes.md'),
          filename: 'axes.md',
          pageType: 'documentation'
        }
      }, {
        name: 'DecorativeAxis',
        content: {
          markdown: getDocUrl('decorative-axis.md'),
          filename: 'axes.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Gradients',
        content: {
          markdown: getDocUrl('gradients.md'),
          filename: 'gradients.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Flexible plots',
        content: {
          markdown: getDocUrl('flexible-plots.md'),
          filename: 'flexible-plots.md',
          pageType: 'documentation'
        }
      }
    ]
  },
  {
    name: 'Series reference',
    children: [
      {
        name: 'Arc Series',
        content: {
          markdown: getDocUrl('arc-series.md'),
          filename: 'arc-series.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Area Series',
        content: {
          markdown: getDocUrl('area-series.md'),
          filename: 'area-series.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Bar Series',
        content: {
          markdown: getDocUrl('bar-series.md'),
          filename: 'bar-series.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Contour Series',
        content: {
          markdown: getDocUrl('contour-series.md'),
          filename: 'contour-series.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Heatmap Series',
        content: {
          markdown: getDocUrl('heatmap-series.md'),
          filename: 'heatmap-series.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Label Series',
        content: {
          markdown: getDocUrl('label-series.md'),
          filename: 'label-series.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Line Series',
        content: {
          markdown: getDocUrl('line-series.md'),
          filename: 'line-series.md',
          pageType: 'documentation'
        }
      },
      {
        name: 'Line-Mark Series',
        content: {
          markdown: getDocUrl('line-mark-series.md'),
          filename: 'line-mark-series.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Mark Series',
        content: {
          markdown: getDocUrl('mark-series.md'),
          filename: 'mark-series.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Polygon Series',
        content: {
          markdown: getDocUrl('polygon-series.md'),
          filename: 'polygon-series.md',
          pageType: 'documentation'
        }
      }, {
        name: 'Rect Series',
        content: {
          markdown: getDocUrl('rect-series.md'),
          filename: 'rect-series.md',
          pageType: 'documentation'
        }
      }
    ]
  },
  {
    name: 'Other Charts',
    children: [
      {
        name: 'Sankey Diagram',
        content: {
          markdown: getDocUrl('sankey.md'),
          filename: 'sankey.md',
          pageType: 'documentation'
        }
      },
      {
        name: 'Treemap',
        content: {
          markdown: getDocUrl('treemap.md'),
          filename: 'treemap.md',
          pageType: 'documentation'
        }
      },
      {
        name: 'Radar Chart',
        content: {
          markdown: getDocUrl('radar-chart.md'),
          filename: 'radar-chart.md',
          pageType: 'documentation'
        }
      },
      {
        name: 'Radial Chart',
        content: {
          markdown: getDocUrl('radial-chart.md'),
          filename: 'radial-chart.md',
          pageType: 'documentation'
        }
      },
      {
        name: 'Sunburst Diagram',
        content: {
          markdown: getDocUrl('sunburst.md'),
          filename: 'sunburst.md',
          pageType: 'documentation'
        }
      }
    ]
  }
]);

export const docsRouting = docPages.reduce((res, section) => section.children.reduce((mem, child) => {
  const filename = child.content.filename;
  const pureFilename = filename.slice(0, filename.length - 3);
  const sectionName = updatePathName(section.name);
  res[filename] = `#/documentation/${sectionName}/${pureFilename}`;
  return mem;
}, res), {});
