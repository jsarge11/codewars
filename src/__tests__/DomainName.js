const { domainName } = require('../DomainName');

describe('it removes the name from the url', () => {
  test.each`
    input                                    | result
    ${'http://github.com/carbonfive/raygun'} | ${'github'}
    ${'http://google.co.jp'}                 | ${'google'}
    ${'www.xakep.ru'}                        | ${'xakep'}
    ${'https://youtube.com'}                 | ${'youtube'}
  `(`expect $input to equal $result`, ({ input, result }) => {
    expect(domainName(input)).toEqual(result);
  });
});
