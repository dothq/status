import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header, StatusText, Statuses } from "../components/style"
import { Service } from "../components/Service"

import Skeleton from 'react-loading-skeleton';
import TimeAgo from 'timeago-react'

import useSWR from 'swr';

const Home = () => {
  const [lastRefresh, setLastRefresh] = React.useState(-1)

  const fetcher = url => {
    setLastRefresh(-1);
    return fetch(url).then(r => { setLastRefresh(Date.now()); return r.json() })
  }

  const [status, setStatus] = React.useState()
  const { data, error } = useSWR(`https://dothq.co/api/status/monitors`, fetcher)

  const onRetryClick = () => {
    window.location.reload()
  }

  React.useEffect(() => {
    if(data && data.result) {
      const amountWorking = data.result.filter(x => x == "Working").length;

      if(amountWorking < (data.result.length/1.2)) {
        setStatus(("Looking good" as any))
      } else {
        setStatus(("Some issues" as any))
      }
    }
  })

  return (
    <Layout>
      <SEO />
      <Header>
        <img src={require("../../config.json").brand.icon} width={48} />
      </Header>
      <StatusText>{status || <Skeleton width={400} />}</StatusText>
      <Statuses>
        {!data && <>
          <Skeleton height={92} width={800} style={{ borderRadius: '16px' }} />
          <Skeleton height={92} width={800} style={{ borderRadius: '16px' }} />
          <Skeleton height={92} width={800} style={{ borderRadius: '16px' }} />
          <Skeleton height={92} width={800} style={{ borderRadius: '16px' }} />
          <Skeleton height={92} width={800} style={{ borderRadius: '16px' }} />
        </>}
        {data && data.result.map(service => (
          <Service key={service.id} name={service.service.name} status={service.service.status} isWorking={service.service.status == "Working"} />
        ))}
      </Statuses>
      <span style={{ fontSize: '12px' }}>refresh{lastRefresh == -1 ? error ? ( <>{" failed "}<a href={"#retry"} onClick={onRetryClick}>retry</a></> ) : 'ing...' : 'ed'}{" "}
        {lastRefresh !== -1 && <TimeAgo
          datetime={lastRefresh}
          locale={"en-US"}
          opts={{ relativeDate: Date.now() }}
          live={true}
        />}
      </span>
    </Layout>
  )
}

export default Home
