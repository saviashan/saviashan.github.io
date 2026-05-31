---
layout: default
---
<div id="lead" class="tech-hero">
    <div id="lead-content">
        <h1 class="glitch-text" data-text="Savishka Ashan">Savishka Ashan</h1>
        <h2 class="terminal-text">> Senior Platform Engineer<span class="cursor">_</span></h2>
        <a href="#contact" class="btn-tech">
            <i class="fa fa-envelope" aria-hidden="true"></i> Request Full Resume
        </a>
    </div>
    <div id="lead-overlay"></div>
    <div id="lead-down">
        <span><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
    </div>
</div>
<!-- End #lead -->

<div id="about" class="tech-section bg-darker">
    <div class="container">
        <h2 class="heading text-accent">About Me</h2>
        <div class="glass-panel" style="max-width: 900px; margin: 0 auto;">
            <p>
                Lead Platform Engineer and infrastructure architect specializing in multi-cloud environments (AWS, Azure, GCP) and complex digital transformations. Proven expertise in assuming technical ownership of business unit infrastructures, standardizing cloud operations, and driving engineering efficiency through AI-centric development and automated deployment pipelines.
            </p>
            <p style="margin-top: 1rem;">
                Strong background in bridging legacy systems to modern, cloud-native architectures while maintaining rigorous ISO 27001 security standards. Adept at aligning infrastructure strategy with overarching business goals, mentoring engineering teams, and optimizing cross-tenant cloud deployments.
            </p>
        </div>
    </div>
</div>
<!-- End #about -->

<div id="experience" class="tech-section">
    <h2 class="heading text-accent">Experience</h2>
    <div id="experience-timeline" class="timeline-container">
        <div class="timeline-item glass-panel">
            <div class="timeline-date">2024 – Present</div>
            <h3>ValuePRO Software</h3>
            <h4>Senior DevOps Engineer (Brisbane)</h4>
            <ul>
                <li>Assumed overarching technical ownership for key business units, architecting and executing comprehensive cross-tenant cloud migrations.</li>
                <li>Transitioned complex enterprise workloads—including Kubernetes clusters, serverless architectures, and multi-model databases—into dedicated environments with zero structural disruption.</li>
                <li>Assisted with Engineering team's adoption of AI-centric development methodologies, integrating modern agentic workflows and establishing KPIs to measure department-wide efficiency gains and developer velocity.</li>
                <li>Engineered fully automated deployment pipelines using Ansible and PowerShell, drastically reducing infrastructure provisioning times.</li>
                <li>Established standardized infrastructure-as-code (IaC) practices across multiple cloud environments, utilizing Terraform and Pulumi.</li>
                <li>Led strategic transitions from proprietary legacy tools to modern open-source solutions to optimize operational costs and enhance observability.</li>
            </ul>
        </div>

        <div class="timeline-item glass-panel">
            <div class="timeline-date">2022 – 2024</div>
            <h3>Herron Todd White</h3>
            <h4>DevOps Engineer & Security Analyst (Chermside)</h4>
            <ul>
                <li>Directed the rapid stabilization and hardening of critical enterprise systems, successfully lifting-and-shifting on-premise workloads to a secure cloud environment.</li>
                <li>Led organizational ISO 27001:2013 compliance initiatives, managing surveillance audits, aligning security postures with ISO standards, and building robust SIEM infrastructure from the ground up for real-time threat detection.</li>
                <li>Designed and engineered a robust hybrid cloud architecture connecting on-premise infrastructure to GCP, managing complex BGP routing, firewall policies, and IAP tunneling.</li>
                <li>Managed multi-cluster Kubernetes environments via Rancher and optimized enterprise data pipelines utilizing Jenkins, BigQuery, and PostgreSQL.</li>
            </ul>
        </div>

        <div class="timeline-item glass-panel">
            <div class="timeline-date">2021 – 2022</div>
            <h3>Herron Todd White</h3>
            <h4>IT Support Officer (Chermside)</h4>
            <p>Managed Active Directory, Group Policies, and hybrid infrastructure operations, building foundational automation workflows using PowerShell and Atera to streamline technical support.</p>
        </div>
    </div>
</div>
<!-- End #experience -->

<div id="education" class="tech-section bg-darker">
    <h2 class="heading text-accent">Education</h2>
    <div class="education-block glass-panel text-center">
        <h3>University of Southern Queensland</h3>
        <span class="education-date tech-badge">2018 - 2021 (Toowoomba)</span>
        <h4>Bachelor of Information & Technology</h4>
        <p>Networking & Cyber Security</p>
    </div>
</div>
<!-- End #education -->

<div id="projects" class="tech-section">
    <h2 class="heading text-accent">Projects</h2>
    <div class="container">
        <div class="row">
            <!-- Injecting the UG-Nexus Solutions project directly, as well as keeping the loop for other projects if any -->
            <div class="col-md-12">
                <div class="project-card glass-panel tech-border">
                    <div class="project-header">
                        <h3>UG-Nexus Solutions (ABN-52105454007)</h3>
                        <span class="tech-badge">2026 - Present</span>
                    </div>
                    <h4>Founder & Lead Architect</h4>
                    <ul>
                        <li>Established the technical and operational foundation for an independent software venture, managing domain procurement, Google Organization verification, and core cloud infrastructure design.</li>
                        <li>Architected and launched NexusTutor, a full-stack, cross-platform application developed natively using Flutter and Dart.</li>
                        <li>Engineered a secure, serverless backend architecture utilising Supabase for database management and Firebase for hosting.</li>
                        <li>Designed and implemented automated CI/CD pipelines using GitHub Actions to streamline deployments, routing traffic securely through Cloudflare.</li>
                    </ul>
                    <a href="https://ugnexus.co" target="_blank" class="btn-tech" style="margin-top: 15px; font-size: 0.8rem; padding: 0.5rem 1rem;">
                        <i class="fa fa-external-link" aria-hidden="true"></i> Visit ugnexus.co
                    </a>
                </div>
            </div>
        </div>
        <div class="row" style="margin-top: 30px;">
            {%- for project in site.data.projects -%}
                {% include project_card.html
                title=project.title
                problem=project.problem
                solution=project.solution
                outcome=project.outcome
                %}
            {%- endfor -%}
        </div>
    </div>
</div>
<!-- End #projects -->

<div id="skills" class="tech-section bg-darker">
    <h2 class="heading text-accent">Technical Arsenal</h2>
    <div class="skills-grid">
      <div class="skill-module glass-panel">
        <div class="skill-header">
            <h3><i class="fa fa-cloud"></i> Cloud Computing & Infrastructure</h3>
            <span class="skill-level text-accent">Expert</span>
        </div>
        <div class="skill-tags">
          <span>AWS</span><span>Azure</span><span>GCP</span><span>Kubernetes</span><span>Docker</span><span>Rancher</span><span>Proxmox</span><span>Hyper-V</span><span>VMware</span><span>Cloudflare</span><span>Helm</span>
        </div>
      </div>

      <div class="skill-module glass-panel">
        <div class="skill-header">
            <h3><i class="fa fa-network-wired"></i> Enterprise Networking</h3>
            <span class="skill-level text-accent">Expert</span>
        </div>
        <div class="skill-tags">
          <span>OSI Model</span><span>BGP & Dynamic Routing</span><span>VPC Peering</span><span>TCP/IP</span><span>DNS / Cloudflare</span><span>Subnetting</span><span>Hybrid Cloud Topology</span><span>Load Balancing</span>
        </div>
      </div>

      <div class="skill-module glass-panel">
        <div class="skill-header">
            <h3><i class="fa fa-terminal"></i> Infrastructure as Code & Auto</h3>
            <span class="skill-level text-accent">Advanced</span>
        </div>
        <div class="skill-tags">
          <span>Terraform</span><span>Pulumi</span><span>Ansible</span><span>PowerShell</span><span>Bash</span><span>CICD</span>
        </div>
      </div>

      <div class="skill-module glass-panel">
        <div class="skill-header">
            <h3><i class="fa fa-shield-alt"></i> Security & Observability</h3>
            <span class="skill-level text-accent">Advanced</span>
        </div>
        <div class="skill-tags">
          <span>ISO 27001</span><span>Wazuh SIEM</span><span>SigNoz</span><span>Network Security</span><span>SAST & DAST</span><span>OWASP</span>
        </div>
      </div>

      <div class="skill-module glass-panel">
        <div class="skill-header">
            <h3><i class="fa fa-database"></i> Database & Serverless</h3>
            <span class="skill-level text-accent">Advanced</span>
        </div>
        <div class="skill-tags">
          <span>PostgreSQL</span><span>SQL Server</span><span>Supabase</span><span>Firebase</span><span>OrientDB</span><span>BigQuery</span>
        </div>
      </div>

      <div class="skill-module glass-panel">
        <div class="skill-header">
            <h3><i class="fa fa-robot"></i> AI-Centric & App Dev</h3>
            <span class="skill-level text-accent">Advanced</span>
        </div>
        <div class="skill-tags">
          <span>AI-Centric Development</span><span>MCP</span><span>Claude Code</span><span>Flutter</span><span>Dart</span><span>Linux</span><span>Gemini Code</span><span>Antigravity</span>
        </div>
      </div>
    </div>
</div>
<!-- End #skills -->

<div id="contact" class="tech-section">
    <h2 class="heading text-accent">Initialize Connection</h2>
    <div id="contact-form" class="glass-panel">
        <form method="POST" action="https://api.web3forms.com/submit">
            <input type="hidden" name="access_key" value="{{ site.web3forms_access_key }}">
            <input type="hidden" name="subject" value="Contact request from personal website" />
            <input type="email" name="email" class="tech-input" placeholder="> enter_your_email@" required>
            <textarea name="message" class="tech-input" placeholder="> enter_your_message..." required></textarea>
            <button type="submit" class="btn-tech">Execute <i class="fa fa-paper-plane"></i></button>
        </form>
    </div>
</div>
<!-- End #contact -->
