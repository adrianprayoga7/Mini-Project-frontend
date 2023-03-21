import CloseIcon from '@mui/icons-material/Close';
import './rules.scss';

//user agreement set html
const Rules = ({ setOpenRules }) => {
  return (
    <div className="rules">
      <div className="wrapper">
        <p>
          Welcome to our website forum! We are excited to have you as a member
          of our online community. Before using our website, please read this
          User Agreement carefully as it governs your use of the forum.
        </p>
        <p>
          By accessing or using our website, you agree to be bound by the terms
          and conditions of this User Agreement. If you do not agree to the
          terms of this agreement, you may not use our website.
        </p>
        <h1>User Agreements</h1>

        <div className="list">
          <li>User Conduct</li>
          <p>
            You agree that you will not use our website for any purpose that is
            illegal or prohibited by this User Agreement. You agree to use our
            website only for lawful purposes and in a way that does not infringe
            on the rights of others or restrict or inhibit others from enjoying
            the website.
          </p>
        </div>
        <div className="list">
          <li>Content</li>
          <p>
            You are solely responsible for any content that you post on our
            website. You agree that you will not post any content that is
            defamatory, obscene, pornographic, harassing, or otherwise
            objectionable. You also agree that you will not post any content
            that violates the intellectual property rights of others or that
            contains viruses, malware, or other harmful software.
          </p>
        </div>
        <div className="list">
          <li>Moderation</li>
          <p>
            We reserve the right to moderate and remove any content that
            violates this User Agreement or that we deem inappropriate. We also
            reserve the right to suspend or terminate your account if you
            violate this User Agreement.
          </p>
        </div>
        <div className="list">
          <li>Intellectual Property</li>
          <p>
            All content on our website, including but not limited to text,
            graphics, logos, images, and software, is the property of our
            website or its content suppliers and is protected by United States
            and international copyright laws. You may not use any content from
            our website without our prior written consent.
          </p>
        </div>
        <div className="list">
          <li>Disclaimer of Warranties</li>
          <p>
            Our website is provided "as is" and without warranty of any kind,
            either express or implied, including but not limited to the implied
            warranties of merchantability and fitness for a particular purpose.
            We do not warrant that our website will be uninterrupted or
            error-free, that defects will be corrected, or that our website or
            the servers that make it available are free of viruses or other
            harmful components.
          </p>
        </div>
        <div className="list">
          <li>Limitation of Liability</li>
          <p>
            In no event shall our website or its affiliates be liable for any
            direct, indirect, punitive, incidental, special, or consequential
            damages arising out of or in any way connected with the use of our
            website or with the delay or inability to use our website, or for
            any information, products, and services obtained through our
            website, or otherwise arising out of the use of our website.
          </p>
        </div>
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy governs the manner in which our website forum
          collects, uses, maintains, and discloses information collected from
          users of our website.
        </p>
        <div className="list">
          <li>Information We Collect</li>
          <p>
            We may collect personal identification information from users in a
            variety of ways, including but not limited to when users register on
            our website, subscribe to our newsletter, respond to a survey, fill
            out a form, and in connection with other activities, services,
            features or resources we make available on our website. Users may be
            asked for their name, email address, mailing address, and phone
            number.
          </p>
        </div>
        <div className="list">
          <li>How We Protect Your Information</li>
          <p>
            We adopt appropriate data collection, storage, and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure, or destruction of your personal
            information, username, password, transaction information, and data
            stored on our website.
          </p>
        </div>
        <div className="list">
          <li>Sharing Your Personal Information</li>
          <p>
            We do not sell, trade, or rent users' personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted
            affiliates, and advertisers for the purposes outlined above.
          </p>
        </div>
        <div className="list">
          <li>Third-Party Websites</li>
          <p>
            Users may find advertising or other content on our website that
            links to the sites and services of our partners, suppliers,
            advertisers, sponsors, licensors, and other third parties. We do not
            control the content or links that appear on these sites and are not
            responsible for the practices employed by websites linked to or from
            our website. These sites and services may have their own privacy
            policies and customer service policies. Browsing and interaction on
            any other website, including websites that have a link to our
            website, are subject to that website's own terms and policies.
          </p>
        </div>
        <div className="list">
          <li>Your Acceptance of These Terms</li>
          <p>
            By using our website, you signify your acceptance of this Privacy
            Policy. If you do not agree to this Privacy Policy, please do not
            use our website. Your continued use of the website following the
            posting of changes to this Privacy Policy will be deemed your
            acceptance of those changes.
          </p>
        </div>
        <h1>Content Policy</h1>
        <p>
          Our website forum is committed to providing a platform for users to
          engage in respectful and productive discussions. To maintain a
          positive and safe environment, we have established the following
          content policy guidelines:
        </p>
        <div className="list">
          <li>Respectful Language</li>
          <p>
            Respectful Language We expect all users to use respectful language
            and refrain from using derogatory, hateful, or offensive language
            towards other users. Harassment, bullying, or discrimination of any
            kind will not be tolerated.
          </p>
        </div>
        <div className="list">
          <li>No Spamming or Advertising</li>
          <p>
            We do not allow spamming or advertising on our website. Any posts or
            comments solely promoting a product or service will be removed.
          </p>
        </div>
        <div className="list">
          <li>No Illegal Activities</li>
          <p>
            Our website forum strictly prohibits the promotion or discussion of
            illegal activities, such as drug use, piracy, or theft.
          </p>
        </div>
        <div className="list">
          <li>No Personal Information Sharing</li>
          <p>
            Users should not share personal information about themselves or
            others on our website forum. This includes but is not limited to
            addresses, phone numbers, email addresses, and social security
            numbers.
          </p>
        </div>
        <div className="list">
          <li>No Plagiarism or Copyright Infringement</li>
          <p>
            Users must not post content that is plagiarized or infringes on
            someone else's copyright or intellectual property rights. Any such
            content will be removed.
          </p>
        </div>
        <div className="list">
          <li>No Violence or Threats</li>
          <p>
            Our website forum does not condone violence or threats of violence.
            Users should not post any content that incites violence or threatens
            harm to others.
          </p>
        </div>
        <p>
          We reserve the right to modify or update this content policy at any
          time. By using our website forum, users agree to abide by these
          guidelines and understand that any violation may result in action
          being taken against their account. If you have any questions or
          concerns about our content policy, please contact us at
          <b> gametiva@games.co</b>.
        </p>
        <button className="close" onClick={() => setOpenRules(false)}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Rules;
