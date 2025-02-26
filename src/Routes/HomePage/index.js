/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addNotification,
  clearNotifications,
} from '@redhat-cloud-services/frontend-components-notifications/redux';
import { useEffect } from 'react';
import useChrome from '@redhat-cloud-services/frontend-components/useChrome';

import {
  Button,
  Title,
  Text,
  TextContent,
  Grid,
  GridItem,
  Stack,
  StackItem,
  Split,
  SplitItem,
  PageSection,
  Divider,
  Flex,
  FlexItem,
} from '@patternfly/react-core';
import { PageHeader } from '@redhat-cloud-services/frontend-components/PageHeader';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

import './home-page.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const { analytics } = useChrome();
  const [hasJoinedList, setHasJoinedList] = useState(false);

  const waitlistNotif = () => {
    if (!hasJoinedList) {
      setHasJoinedList(true);
      dispatch(
        addNotification({
          variant: 'success',
          title:
            'We have received your request. While you are waiting, please join our Slack channel.',
          description: (
            <>
              <p>
                We are working hard to get you early access. After we approve
                your request, we will send you an email notification with
                information about how you can access and start using the
                service.
              </p>
              <br />
              <Button
                variant="link"
                component="a"
                href="https://rhdevnation.slack.com/archives/C04LXT1EU7K"
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLinkAltIcon />}
                iconPosition="right"
                isInline
              >
                Join the #software-supply-chain-security channel on Slack
              </Button>
            </>
          ),
        })
      );
    } else {
      dispatch(
        addNotification({
          variant: 'success',
          title:
            'Thank you for your interest. We are processing your previous request.',
          description: (
            <>
              <p>
                We are working hard to get you early access. After we approve
                your request, we will send you an email notification with
                information about how you can access and start using the
                service.
              </p>
              <br />
              <Button
                variant="link"
                component="a"
                href="https://rhdevnation.slack.com/archives/C04LXT1EU7K"
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLinkAltIcon />}
                iconPosition="right"
                isInline
              >
                Join the #software-supply-chain-security channel on Slack
              </Button>
            </>
          ),
        })
      );
    }
  };

  useEffect(() => {
    dispatch(clearNotifications());
  }, []);

  return (
    <React.Fragment>
      <PageHeader className="dbaas-home-page__header pf-u-p-2xl">
        <Grid>
          <GridItem sm={12} md={6}>
            <Title size="2xl" headingLevel="h1">
              Get started with Red Hat Trusted Content
            </Title>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text size="lg" className="dbaas-home-page__subtitle">
                    &nbsp;
                  </Text>
                  <Text>
                    Red Hat Trusted Content increases trust and integrity in
                    source code and accelerates the application development
                    process by providing recommendations for trusted components,
                    software composition analysis and vulnerability remediation
                    tactics directly in your IDE.
                  </Text>
                  <Text>
                    Verify components easily by using Red Hat Trusted Content to
                    quickly find Software Bill of Materials (SBOMs) and
                    Vulnerability Exploitability eXchange (VEX) for Red Hat
                    products and packages or upload your own SBOM for analysis.
                    Use what we use, know what we know.
                  </Text>
                  <Text>&nbsp;</Text>
                  <Button
                    onClick={() => {
                      analytics.track('tc-learn-more-1-click');
                      waitlistNotif();
                      return false;
                    }}
                    variant="primary"
                    ouiaId="button-try-tc-1"
                    isLarge
                  >
                    Join the waiting list
                  </Button>
                </TextContent>
              </StackItem>
            </Stack>
          </GridItem>
        </Grid>
      </PageHeader>

      {
        <PageSection
          variant="light"
          className="appsrv-marketing--page-section--marketing pf-u-background-color-100"
        >
          <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
            <Flex>
              <FlexItem spacer={{ default: 'spacerxl' }}>&nbsp;</FlexItem>
            </Flex>

            <Flex flex={{ default: 'flex_1' }}>
              <FlexItem className="rh-icon-flex">
                <Stack>
                  <StackItem>
                    <div className="pf-u-text-align-center rh-secure rh-icon">
                      &nbsp;
                    </div>
                  </StackItem>
                  <StackItem>
                    <div className="pf-u-text-align-center">
                      Get recommendations and <br />
                      fixes right in your IDE
                    </div>
                  </StackItem>
                </Stack>
              </FlexItem>
            </Flex>

            <Divider className="pf-m-vertical" />

            <Flex flex={{ default: 'flex_1' }}>
              <FlexItem className="rh-icon-flex">
                <Stack>
                  <StackItem>
                    <div className="pf-u-text-align-center rh-clipboard rh-icon">
                      &nbsp;
                    </div>
                  </StackItem>
                  <StackItem>
                    <div className="pf-u-text-align-center">
                      Find SBOMs or VEXes for your
                      <br /> Red Hat package or product
                    </div>
                  </StackItem>
                </Stack>
              </FlexItem>
            </Flex>

            <Divider className="pf-m-vertical" />

            <Flex flex={{ default: 'flex_1' }}>
              <FlexItem className="rh-icon-flex">
                <Stack>
                  <StackItem>
                    <div className="pf-u-text-align-center rh-shield rh-icon">
                      &nbsp;
                    </div>
                  </StackItem>
                  <StackItem>
                    <div className="pf-u-text-align-center">
                      Upload your own SBOM to learn more
                      <br /> about dependencies and vulnerabilities
                    </div>
                  </StackItem>
                </Stack>
              </FlexItem>
            </Flex>

            <Flex>
              <FlexItem spacer={{ default: 'spacerxl' }}>&nbsp;</FlexItem>
            </Flex>
          </Flex>
        </PageSection>
      }

      <PageSection>
        <Split hasGutter>
          <SplitItem span={6} isFilled className="border-gray">
            <Stack hasGutter>
              <StackItem className="inner-title pad-bottom">
                Not Just Trust. Verifiable Trust.
              </StackItem>
              <StackItem className="pad-bottom">
                <p>
                  Search and use trusted verified artifacts delivered with
                  provenance, signatures, and attestation. Enable developers to
                  choose the dependencies they trust and enable security teams
                  to verify that trust.
                </p>
              </StackItem>
              <StackItem className="pad-bottom">
                <div className="venn-img">&nbsp;</div>
              </StackItem>
            </Stack>
          </SplitItem>
          <SplitItem span={6} isFilled className="border-gray">
            <Stack hasGutter>
              <StackItem className="inner-title pad-bottom">
                Shift Security Left. Recognize your dependencies early.
              </StackItem>
              <StackItem className="pad-bottom">
                <p>
                  Making trusted choices early in the software development life
                  cycle does not have to be difficult. Red Hat Dependency
                  Analytics (RHDA) plugs into your IDE to analyze your
                  transitive dependencies and offer recommendations on when to
                  use Red Hat packages.
                </p>
              </StackItem>
              <StackItem className="inner-title pad-bottom">
                Take advantage of Red Hat expertise.
              </StackItem>
              <StackItem className="pad-bottom">
                <p>
                  Red Hat has over 20 years of experience curating, building,
                  and delivering secure software. Organizations, globally, have
                  taken advantage of Red Hat&apos;s dedicated product security
                  team to monitor, identify, and address vulnerabilities for all
                  of Red Hat&apos;s product portfolio - extending that expertise
                  from OpenSource to the Enterprise.
                </p>
              </StackItem>
              <StackItem>
                <Button
                  onClick={() => {
                    analytics.track('tc-learn-more-2-click');
                    waitlistNotif();
                    return false;
                  }}
                  variant="primary"
                  ouiaId="button-try-tc-2"
                  isLarge
                >
                  Join the waiting list
                </Button>
              </StackItem>
            </Stack>
          </SplitItem>
        </Split>
      </PageSection>
    </React.Fragment>
  );
};

export default HomePage;
