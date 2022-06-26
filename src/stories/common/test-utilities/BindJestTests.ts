export default function bindJestTests(
  testFile: string,
  component: () => JSX.Element
): void {
  component.bind({
    args: {
      text: "Jest results in Storybook",
    },
    parameters: {
      jest: testFile,
    },
  });
}
