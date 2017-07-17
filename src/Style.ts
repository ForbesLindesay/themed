export default interface Style {
  /**
   * Sets the default alignment in the cross axis for all of the flex container's items, including anonymous flex items, similarly to how justify-content aligns items along the main axis.
   */
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  /**
   * The flex-basis CSS property describes the initial main size of the flex item before any free space is distributed according to the flex factors described in the flex property (flex-grow and flex-shrink).
   */
  flexBasis?: 0;
  /**
   * Specifies the flex grow factor of a flex item.
   * See CSS flex-grow property https://drafts.csswg.org/css-flexbox-1/#flex-grow-property
   */
  flexGrow?: 0 | 1 | 2 | 3 | 4;
  /**
   * Specifies the flex shrink factor of a flex item.
   * See CSS flex-shrink property https://drafts.csswg.org/css-flexbox-1/#flex-shrink-property
   */
  flexShrink?: 0 | 1 | 2 | 3 | 4;

  fontSize?: string;

  margin?: any;
  marginTop?: any;
  marginBottom?: any;
  marginLeft?: any;
  marginRight?: any;
};
